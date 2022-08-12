import Head from "next/head";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function About() {
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
				<div class="row text-center">
					<div class="contourBtm pb-5">
						<h1 class="my-0">LISA CARTER LMT #5924</h1>
						<h3 class="my-0 pt-3">INTUITIVE, EMPATH, HEALER</h3>
					</div>
				</div>
				<div class="row text-center align-items-center">
					<div class="col-xl-6 offset-xl-0 py-5 px-4 px-lg-5 order-2 order-xl-1">
						<p class="my-0">
							My name is Lisa Carter. I have been a licensed massage therapist
							for 24 years in Oregon. I am a mother of five and have been
							studying the healing arts for most of my life. After a near-death
							experience in 2019, I had a profound ongoing awakening in
							realizing and facing the fact that I wasn't living my most
							authentic life. I started on a path searching for my deeper
							soulful nature. Through ongoing self-inquiry, sorrowful and joyful
							grieving - I found a powerful resource in seeking stillness and
							what I call sacred rest. It's been a practice of coming home to
							myself again and again. And it's from this spirit and a desire to
							share our journeys, experiences, and healing that I lovingly offer
							this sacred time and space together through New Dawn Retreats. New
							Dawn's journey is a path of love. Love is the binding force that
							connects us all, to sacred Mother Earth, and to the Divine.
						</p>
					</div>

					<div class="col-xl-6 order-1 order-xl-2 py-xl-5 px-0">
						<img src="/about.jpg" alt="Lisa Carter" class="img-fluid" />
					</div>
				</div>
				<div class="col-6 offset-3 text-center">
					<a href="/contact" class="btn pinkBtn btn-lg mb-5">
						Contact Me!
					</a>
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
