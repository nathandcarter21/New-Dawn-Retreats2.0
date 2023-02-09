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
					<img
						src="yoga.jpeg"
						alt=""
						className="img-fluid"
					/>
				</div>
				<div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered">
					<h2 className="my-0">Sacred Rest Mexico 2023</h2>
					<p className="my-0 my-3">
						Women: Feb 11th 2023
					</p>
					<a href="/retreats/mexico" className="btn pinkBtn btn-lg">View Details</a>
				</div>
			</div>

			<div className="row text-center align-items-center">
				<div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered order-2 order-lg-1">
					<h2 className="my-0">Summerlake Hotsprings Retreat</h2>
					<p className="my-0 my-3">
						Women: tbd
					</p>
					<p className="my-0 my-3">
						Men: tbd
					</p>
					<a href="/retreats/summer_lake" className="btn pinkBtn btn-lg">
						View Details
					</a>
				</div>
				<div className="col-lg-7 px-0 pb-5 py-lg-5 order-1 order-lg-2">
					<img src="/sunset3.jpg" alt="" className="img-fluid" />
				</div>
			</div>
		</main>
	);
}
