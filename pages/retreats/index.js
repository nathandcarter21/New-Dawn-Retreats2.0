import Head from "next/head";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Retreats() {
	return (
		<main className="container-fluid pr-0 mt-4">
			<div className="row text-center">
				<div className="contourBtm pb-5">
					<h1>Upcoming Retreats</h1>
					<h3 className="my-2">~Sacred Rest & Restorative Experiences~</h3>
				</div>
			</div>
			<div className="row text-center align-items-center contourBtm">
				<div className="col-lg-7 pb-5 py-lg-5 px-0">
					<img src="/sunset3.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered">
					<h3 className="my-0">Summerlake Hotsprings Retreat Autumn 2022</h3>
					<p className="my-0 my-3">
						More information for this retreat coming soon!
					</p>
					<a href="/retreats/summer_lake" className="btn pinkBtn btn-lg">
						View Details
					</a>
				</div>
			</div>

			<div className="row text-center align-items-center">
				<div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered order-2 order-lg-1">
					<h3 className="my-0">Sacred Rest Mexico 2022</h3>
					<p className="my-0 my-3">
						More information for this retreat coming soon!
					</p>
					{/* <a href="/retreats/mexico" className="btn pinkBtn btn-lg">View Details</a> */}
				</div>

				<div className="col-lg-7 px-0 pb-5 py-lg-5 order-1 order-lg-2">
					<img
						src="https://images.unsplash.com/photo-1611222566360-ef1f0a8c6451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNvJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="img-fluid"
					/>
				</div>
			</div>
		</main>
	);
}
