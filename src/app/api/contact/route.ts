import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/db";
import { getAdminNotificationEmail, getThankYouEmail } from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
	try {
		const { name, email, message, hcaptchaToken } = await req.json();
		
		// Validate input
		if (!name || !email || !message) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
		}

		// Verify hCaptcha
		const secret = process.env.HCAPTCHA_SECRET;
		const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY;
		
		if (!secret || !sitekey) {
			return NextResponse.json({ error: "Captcha not configured" }, { status: 500 });
		}

		const verifyRes = await fetch("https://hcaptcha.com/siteverify", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({ secret, response: hcaptchaToken || "" }),
		});

		const captchaData = await verifyRes.json();
		if (!captchaData?.success) {
			return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
		}

		// Store in database
		try {
			await prisma.contactSubmission.create({
				data: {
					name,
					email,
					message,
				},
			});
		} catch (dbError) {
			console.error("Database error:", dbError);
			// Continue even if database fails - we still want to send emails
		}

		// Email configuration
		const toEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@cruxlabx.com";
		const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

		let adminEmailSent = false;
		let userEmailSent = false;

		// Send emails using Resend
		if (resend) {
			try {
				// 1. Send notification email to admin
				const adminEmailTemplate = getAdminNotificationEmail(name, email, message);
				const { data: adminData, error: adminError } = await resend.emails.send({
					from: fromEmail,
					to: [toEmail],
					replyTo: email,
					subject: adminEmailTemplate.subject,
					html: adminEmailTemplate.html,
					text: adminEmailTemplate.text,
				});

				if (adminError) {
					console.error("Admin email error:", adminError);
				} else {
					adminEmailSent = true;
					console.log("Admin notification sent:", adminData);
				}

				// 2. Send thank you email to user
				const thankYouTemplate = getThankYouEmail(name);
				const { data: userData, error: userError } = await resend.emails.send({
					from: fromEmail,
					to: [email],
					subject: thankYouTemplate.subject,
					html: thankYouTemplate.html,
					text: thankYouTemplate.text,
				});

				if (userError) {
					console.error("User thank you email error:", userError);
				} else {
					userEmailSent = true;
					console.log("Thank you email sent:", userData);
				}
			} catch (emailError) {
				console.error("Email sending error:", emailError);
			}
		} else {
			console.warn("Resend API key not configured. Emails not sent.");
		}

		return NextResponse.json({ 
			ok: true,
			message: "Thank you for your message! We'll get back to you soon.",
			emailsSent: { admin: adminEmailSent, user: userEmailSent }
		});

	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json({ 
			error: "Failed to process your request. Please try again later." 
		}, { status: 500 });
	}
}
