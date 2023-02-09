import nodemailer from "nodemailer";

const handleContactEmail = async (req, res, transporter) => {
	const { name, email, message } = req.body;

	if (name === undefined || email === undefined || message === undefined) {

		res.redirect(301, "/contact?success=false");
		return;
	}

	if (name === "CrytoCal" || name === "CrytoCalCal") {
		res.redirect(301, "/contact?success=true");
		return;
	}

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

		let info = await transporter.sendMail({
			from: `'New Dawn Retreat's Website' <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_RECIPIENT,
			subject: "Message From Contact Page",
			html: format,
		});

		res.redirect(301, "/contact?success=true");
		return;
	}
	catch (e) {
		res.redirect(301, "/contact?success=false");
		return;
	}
}


const handleMexicoApplicationEmail = async (req, res, transporter) => {

	const handleRedirect = (roomType) => {
		switch (roomType) {
			case 'single':
				res.redirect(301, "https://buy.stripe.com/8wMbK54NKcFG64wdQU");
				break;
			case 'spa':
				res.redirect(301, "https://buy.stripe.com/dR6eWh2FC356eB214a");
				break;
			case 'double':
				res.redirect(301, "https://buy.stripe.com/5kA9BXfso8pqfF6cMR");
				break;
			default:
				res.redirect(301, `/retreats/mexico/${roomType}`);
				break;
		}
		return;
	}

	const { name, email, phone, message, dest, roomType } = req.body;

	if (name === undefined || email === undefined || phone === undefined || message === undefined) {
		res.redirect(301, `/retreats/mexico/${roomType}?success=false`);
		return;
	}

	try {
		const format = `
				<p>
				Name: ${name}
				</p>
				<p>
				Email: ${email}
				</p>
				<p>
				Phone: ${phone}
				</p>
				<p>
				Destination: ${dest}
				</p>
				<p>
				Room Type: ${roomType}
				</p>
				<p>
				Message: ${message}
				</p>
				`;

		let info = await transporter.sendMail({
			from: `'New Dawn Retreat's Website' <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_RECIPIENT,
			subject: "Message From Contact Page",
			html: format,
		});

		handleRedirect(roomType);
	}
	catch (e) {
		res.redirect(301, `/retreats/mexico/${roomType}?success=false`);
		return;
	}
}

export default async function handler(req, res) {

	if (req.method !== "POST") {
		res.redirect(301, "/contact");
		return;
	}

	let transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const { dest } = req.body;

	switch (dest) {
		case 'mexico':
			handleMexicoApplicationEmail(req, res, transporter);
			break;
		default:
			handleContactEmail(req, res, transporter);
			break;
	}
	return;
}
