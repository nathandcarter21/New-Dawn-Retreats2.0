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
          <img src="12-13-sunset.png" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered">
          <h2 className="my-0">Sacred Rest Mexico</h2>
          <p className="my-0 my-3">February 2nd - 7th, 2025</p>
          <p className="my-0 my-3">In Beautiful Tronconnes Mexico</p>
          <p className="my-0 my-3">
            Hosted by Lisa Carter LMT 5924 Retreat Facilitator
          </p>
          <p className="my-0 my-3">
            Featuring Terra McDonald LMT 20082 Co-Creator
          </p>
          <a href="/retreats/mexico" className="btn pinkBtn btn-lg">
            View Details
          </a>
        </div>
      </div>

      {/* <div className="row text-center align-items-center">
        <div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered order-2 order-lg-1">
          <h2 className="my-0">Summerlake Hotsprings Retreat</h2>
          <p className="my-0 my-3">May 3rd - 5th, 2024</p>
          <p className="my-0 my-3">October, 2024</p>
          {/* <a href="/retreats/summer_lake" className="btn pinkBtn btn-lg">
            View Details
          </a> 
        </div>
        <div className="col-lg-7 px-0 pb-5 py-lg-5 order-1 order-lg-2">
          <img src="/sunset3.jpg" alt="" className="img-fluid" />
        </div>
      </div> */}
    </main>
  );
}
