export default function Home() {
  return (
    <main className="container-fluid pr-0 mt-4">
      <div className="row text-center">
        <div className="contourBtm pb-5">
          <h1 className="my-0">New Dawn Retreats</h1>
          <h2 className="mt-2">~Sacred Rest~</h2>
        </div>
      </div>
      <div className="row text-center align-items-center contourBtm">
        <div className="col-md-7 py-md-5 px-0">
          <img src="/yoga.jpeg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-5 px-5 py-5 text-centered">
          <p className="my-0">
            Come home to yourself by joining us in the ancient healing waters of
            Oregon's beautiful high plains desert. You can enjoy the natural
            outdoor hot springs in a spirit of connection and self-healing with
            other women of like-minded soul community.
          </p>
        </div>
      </div>

      <div className="row text-center align-items-center">
        <div className="col-md-5 px-5 py-md-5 py-5 text-centered order-2 order-md-1">
          <p className="my-0">
            Enjoy guided daily meditations with an emphasis on self-discovery.
            Embark on daily excursions to ancient caves and historical
            pictographs. Relish a healthy nightly meal prepared with love as a
            time to gather and connect and share. You can expect fire
            ceremonies, healing circles, drumming, sound therapy, and card
            readings. The sacred water is accessible 24/7. Massages will be
            available on-site with advanced bookings.
          </p>
        </div>

        <div className="col-md-7 px-0 py-md-5 order-1 order-md-2">
          <img src="/replacesunset.JPG" alt="" className="img-fluid" />
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2 text-center">
          <a href="/retreats" className="btn pinkBtn btn-lg mb-5">
            View Upcoming Retreats
          </a>
        </div>
      </div>
    </main>
  );
}
