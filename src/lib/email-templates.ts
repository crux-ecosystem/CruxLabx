/**
 * Email template for admin notification
 */
export function getAdminNotificationEmail(name: string, email: string, message: string) {
	return {
		subject: `New Contact Form Submission from ${name}`,
		html: `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Contact Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
	<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
		<tr>
			<td align="center">
				<table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<!-- Header -->
					<tr>
						<td style="background: linear-gradient(135deg, #66FCF1 0%, #45A29E 100%); padding: 30px; text-align: center;">
							<h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
						</td>
					</tr>
					
					<!-- Content -->
					<tr>
						<td style="padding: 30px;">
							<p style="margin: 0 0 20px 0; color: #333333; font-size: 16px;">You have received a new message from your website contact form.</p>
							
							<!-- Contact Details -->
							<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
								<tr>
									<td style="padding-bottom: 15px;">
										<strong style="color: #66FCF1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">From:</strong>
										<p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;">${name}</p>
									</td>
								</tr>
								<tr>
									<td style="padding-bottom: 15px;">
										<strong style="color: #66FCF1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
										<p style="margin: 5px 0 0 0;">
											<a href="mailto:${email}" style="color: #66FCF1; text-decoration: none; font-size: 16px;">${email}</a>
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<strong style="color: #66FCF1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</strong>
										<div style="margin-top: 10px; background-color: #ffffff; padding: 15px; border-radius: 4px; border-left: 4px solid #66FCF1;">
											<p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
										</div>
									</td>
								</tr>
							</table>
							
							<!-- Action Button -->
							<table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
								<tr>
									<td align="center">
										<a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #66FCF1 0%, #45A29E 100%); color: #000000; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px;">Reply to ${name}</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					
					<!-- Footer -->
					<tr>
						<td style="background-color: #f8f8f8; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
							<p style="margin: 0; color: #666666; font-size: 12px;">
								This email was sent from the CruxLabX contact form.<br>
								Submitted on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
		`,
		text: `New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the CruxLabX contact form.
Submitted on ${new Date().toLocaleString()}
		`,
	};
}

/**
 * Email template for user thank you message
 */
export function getThankYouEmail(name: string) {
	return {
		subject: "Thank you for contacting CruxLabX",
		html: `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Thank You</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
	<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
		<tr>
			<td align="center">
				<table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<!-- Header -->
					<tr>
						<td style="background: linear-gradient(135deg, #66FCF1 0%, #45A29E 100%); padding: 40px; text-align: center;">
							<h1 style="margin: 0; color: #000000; font-size: 28px; font-weight: bold;">Thank You!</h1>
						</td>
					</tr>
					
					<!-- Content -->
					<tr>
						<td style="padding: 40px 30px;">
							<h2 style="margin: 0 0 20px 0; color: #333333; font-size: 22px;">Hi ${name},</h2>
							
							<p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.6;">
								Thank you for reaching out to <strong style="color: #66FCF1;">CruxLabX</strong>. We've received your message and appreciate you taking the time to contact us.
							</p>
							
							<p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.6;">
								Our team will review your message and get back to you as soon as possible. We typically respond within <strong>24-48 hours</strong> during business days.
							</p>
							
							<div style="background: linear-gradient(135deg, rgba(102, 252, 241, 0.1) 0%, rgba(69, 162, 158, 0.1) 100%); border-left: 4px solid #66FCF1; padding: 20px; border-radius: 6px; margin: 30px 0;">
								<p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6;">
									<strong>What's Next?</strong><br>
									• We'll review your inquiry carefully<br>
									• You'll receive a personalized response from our team<br>
									• For urgent matters, feel free to reply to this email
								</p>
							</div>
							
							<p style="margin: 20px 0 0 0; color: #555555; font-size: 16px; line-height: 1.6;">
								In the meantime, feel free to explore our <a href="https://cruxlabx.com/research" style="color: #66FCF1; text-decoration: none; font-weight: bold;">research</a> or check out our <a href="https://cruxlabx.com/projects" style="color: #66FCF1; text-decoration: none; font-weight: bold;">projects</a>.
							</p>
						</td>
					</tr>
					
					<!-- Footer -->
					<tr>
						<td style="background-color: #000000; padding: 30px; text-align: center;">
							<p style="margin: 0 0 10px 0; color: #ffffff; font-size: 18px; font-weight: bold;">CruxLabX</p>
							<p style="margin: 0 0 15px 0; color: #999999; font-size: 14px;">
								Building the future of AI-powered solutions
							</p>
							<p style="margin: 0; color: #999999; font-size: 12px;">
								<a href="https://cruxlabx.com" style="color: #66FCF1; text-decoration: none; margin: 0 10px;">Website</a> |
								<a href="https://cruxlabx.com/docs" style="color: #66FCF1; text-decoration: none; margin: 0 10px;">Docs</a> |
								<a href="https://github.com/crux-ecosystem" style="color: #66FCF1; text-decoration: none; margin: 0 10px;">GitHub</a>
							</p>
						</td>
					</tr>
				</table>
				
				<!-- Legal -->
				<table width="600" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
					<tr>
						<td style="text-align: center; padding: 10px;">
							<p style="margin: 0; color: #999999; font-size: 11px;">
								This email was sent because you contacted us through our website.<br>
								© ${new Date().getFullYear()} CruxLabX. All rights reserved.
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
		`,
		text: `Hi ${name},

Thank you for reaching out to CruxLabX. We've received your message and appreciate you taking the time to contact us.

Our team will review your message and get back to you as soon as possible. We typically respond within 24-48 hours during business days.

What's Next?
• We'll review your inquiry carefully
• You'll receive a personalized response from our team
• For urgent matters, feel free to reply to this email

In the meantime, feel free to explore our research or check out our projects.

Best regards,
The CruxLabX Team

---
This email was sent because you contacted us through our website.
© ${new Date().getFullYear()} CruxLabX. All rights reserved.
		`,
	};
}
