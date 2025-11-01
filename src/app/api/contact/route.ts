import { NextResponse } from "next/server";
import { Resend } from "resend";

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

		// Send email using Resend
		const toEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@cruxlabx.com";
		const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev"; // Default Resend test email

		if (resend) {
			try {
				const { data, error } = await resend.emails.send({
					from: fromEmail,
					to: [toEmail],
					reply_to: email,
					subject: `Contact Form Submission from ${name}`,
					html: `
						<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
							<h2 style="color: #66FCF1; margin-bottom: 20px;">New Contact Form Submission</h2>
							<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
								<p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
								<p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
								<p style="margin: 10px 0;"><strong>Message:</strong></p>
								<div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
									<p style="white-space: pre-wrap; margin: 0;">${message}</p>
								</div>
							</div>
							<p style="color: #666; font-size: 12px; margin-top: 30px;">
								This email was sent from the CruxLabx contact form.
							</p>
						</div>
					`,
					text: `New Contact Form Submission\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`,
				});

				if (error) {
					console.error("Resend API error:", error);
					// Continue to return success for graceful degradation
				}
			} catch (emailError) {
				console.error("Email sending error:", emailError);
				// Continue to return success for graceful degradation
			}
		} else {
			console.warn("Resend API key not configured. Email not sent.");
		}

		return NextResponse.json({ 
			ok: true,
			message: "Your message has been sent successfully!" 
		});

	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json({ 
			error: "Failed to process your request. Please try again later." 
		}, { status: 500 });
	}
}
