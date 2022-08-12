import Head from "next/head";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function About() {
	return (
		<main className="container-fluid pr-0 mt-4">
			<div className="row text-center">
				<div className="contourBtm pb-5">
					<h1 className="my-0">LISA CARTER LMT #5924</h1>
					<h3 className="my-0 pt-3">INTUITIVE, EMPATH, HEALER</h3>
				</div>
			</div>
			<div className="row text-center align-items-center">
				<div className="col-xl-6 offset-xl-0 py-5 px-4 px-lg-5 order-2 order-xl-1">
					<p className="my-0">
						My name is Lisa Carter. I have been a licensed massage therapist for
						24 years in Oregon. I am a mother of five and have been studying the
						healing arts for most of my life. After a near-death experience in
						2019, I had a profound ongoing awakening in realizing and facing the
						fact that I wasn't living my most authentic life. I started on a
						path searching for my deeper soulful nature. Through ongoing
						self-inquiry, sorrowful and joyful grieving - I found a powerful
						resource in seeking stillness and what I call sacred rest. It's been
						a practice of coming home to myself again and again. And it's from
						this spirit and a desire to share our journeys, experiences, and
						healing that I lovingly offer this sacred time and space together
						through New Dawn Retreats. New Dawn's journey is a path of love.
						Love is the binding force that connects us all, to sacred Mother
						Earth, and to the Divine.
					</p>
				</div>

				<div className="col-xl-6 order-1 order-xl-2 py-xl-5 px-0">
					<img src="/about.jpg" alt="Lisa Carter" className="img-fluid" />
				</div>
			</div>
			<div className="col-6 offset-3 text-center">
				<a href="/contact" className="btn pinkBtn btn-lg mb-5">
					Contact Me!
				</a>
			</div>
		</main>
	);
}
