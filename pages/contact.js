import Head from "next/head";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Contact() {
	return (
		<div className="d-flex flex-column vh-100">
			<Head>
				<title>Create Next App!!</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Nunito&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">New Dawn Retreats</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/retreats">Retreats</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<main className="container-fluid pr-0 mt-4">
				<div class="row">
					<div class="col-8 offset-2 text-center">
						<h1>Send Us A Message!</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-8 offset-2 col-lg-6 offset-lg-3">
						<form
							id="form"
							action="/contact"
							method="post"
							class="validated-form"
							novalidate>
							<div>
								<div class="mb-3">
									<label class="form-label" for="name">
										Name
									</label>
									<input
										class="form-control"
										type="text"
										id="name"
										name="sender[name]"
										placeholder=""
										required
									/>
									<div class="valid-feedback">Looks Good!</div>
									<div class="invalid-feedback">Please enter a name</div>
								</div>

								<div class="mb-3">
									<label class="form-label" for="email">
										Email
									</label>
									<input
										class="form-control"
										type="email"
										id="email"
										name="sender[email]"
										placeholder=""
										required
									/>
									<div class="valid-feedback">Looks Good!</div>
									<div class="invalid-feedback">Please enter a valid email</div>
								</div>

								<div class="mb-3">
									<label class="form-label" for="message">
										Message
									</label>

									<textarea
										class="form-control"
										type="text-area"
										id="message"
										name="sender[message]"
										rows="10"
										required></textarea>

									<div class="valid-feedback">Looks Good!</div>
									<div class="invalid-feedback">Please enter a message</div>
								</div>

								<div class="mb-3 text-center">
									<button class="btn btn-lg pinkBtn submit" id="send">
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
			<footer class="footer py-3 mt-auto contourTop">
				<div class=" container-fluid">
					<div class="row">
						<div class="col-4 text-center btn copyright">
							<span class="text-muted">New Dawn Retreats 2022</span>
						</div>
						<div class="col-4 text-center">
							<a
								href="https://www.instagram.com/newdawnretreats/"
								class="btn text-muted">
								<i class="bi bi-instagram"> New Dawn Retreats</i>
							</a>
						</div>
						<div class="col-4 text-center">
							<a href="mailto:jnlcarter5@gmail.com" class="btn text-muted mail">
								Website developed by Nathan Carter
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
