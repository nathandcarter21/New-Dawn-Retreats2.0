import { Form } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import Flash from "../components/Flash";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
	const [validated, setValidated] = useState(false);
	const [bot, setBot] = useState(true);

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};
	const handleOnChange = (value) => {
		setBot(false);
	};
	const router = useRouter();
	let { success } = router.query;

	return (
		<main className="container-fluid pr-0 mt-4">
			<div className="row">
				<div className="col-8 offset-2 text-center">
					<h1>Send Us A Message!</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-8 offset-2 col-lg-6 offset-lg-3">
					<Form
						noValidate
						validated={validated}
						onSubmit={handleSubmit}
						action="/api/email"
						method="POST"
						className={"form"}>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" required />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid">
								Please enter a name.
							</Form.Control.Feedback>
						</Form.Group>

						<input type="hidden" name="src" value="contact" />


						<Form.Group className="mb-3">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" name="email" required />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid">
								Please enter a valid email.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" name="message" rows={8} required />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid">
								Please enter a message.
							</Form.Control.Feedback>
						</Form.Group>

						<div className="text-center mb-3 d-flex align-items-center flex-column">
							<ReCAPTCHA
								sitekey="6Lc3VYAhAAAAAMiElKiAdWj1J9FWtXur5yIxxIQ6"
								onChange={handleOnChange}
								className="mb-3"
							/>
							<button
								type="submit"
								className="btn btn-lg pinkBtn submit"
								disabled={bot}>
								Send Message
							</button>
						</div>
					</Form>
				</div>
			</div>
			<Flash success={success} />
			<div className="other">
				<h3 className="text-center">You can also reach us at...</h3>
				<ul>
					<li>
						Email:{" "}
						<a href="mailto:lisadawncarter313@gmail.com" className="brownLink">
							lisadawncarter313@gmail.com
						</a>
					</li>
					<li>
						Phone:{" "}
						<a href="tel:5419440768" className="brownLink">
							(541) 944-0768
						</a>
					</li>
				</ul>
			</div>
		</main>
	);
}
