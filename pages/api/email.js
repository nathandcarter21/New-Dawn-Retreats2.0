import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;
		if (name && email && message) {
			try {
				const format = `
					<p>
					Name: ${name}
					</p>
					<p>
					Email: ${email}
					</p>
					<p>
					Message: ${message}
					</p>
					`;

				let transporter = nodemailer.createTransport({
					host: "smtp-mail.outlook.com",
					port: 587,
					secure: false,
					auth: {
						user: process.env.EMAIL_USER,
						pass: process.env.EMAIL_PASSWORD,
					},
				});

				let info = await transporter.sendMail({
					from: `'New Dawn Retreat's Website' <${process.env.EMAIL_USER}>`,
					to: process.env.EMAIL_RECIPIENT,
					subject: "Message From Contact Page",
					html: format,
				});
				res.redirect("/contact?success=true");
			} catch (e) {
				res.redirect(307, "/contact?success=false");
			}
		}
		res.redirect(307, "/contact?success=false");
	} else {
		res.redirect(307, "/contact");
	}
}
