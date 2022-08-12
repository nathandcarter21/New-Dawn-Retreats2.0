import Head from "next/head";
import Image from "next/image";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import Flash from "../components/Flash";
export default function Contact() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
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

						<div className="text-center mb-3">
							<button type="submit" className="btn btn-lg pinkBtn submit">
								Send Message
							</button>
						</div>
					</Form>
				</div>
			</div>
			<Flash success={success} />
		</main>
	);
}
