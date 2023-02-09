export default function Summer_Lake() {
    return (
        <main className="container-fluid pr-0 mt-4">
            <div className="row text-center">
                <div className="contourBtm mt-3">
                    <h1 className="mb-5">Information for the Summer Lake Retreat</h1>
                </div>
            </div>
            <div className="row text-center align-items-center lowBright contourBtm">
                <div className="col-lg-7 py-lg-5 pb-5 px-0">
                    <img src="/day.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered">
                    <p className="my-0">
                        This sacred rest retreat will begin on the afternoon of May 12th and
                        complete mid-morning on May 15th upon morning checkout. Summer Lake
                        Hot Springs is a place of peace and reflection. This retreat will
                        offer the opportunity to experience sacred rest within sacred space
                        together.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center contourBtm">
                <div className="col-lg-7 py-lg-5 px-0 pb-5 order-1 order-lg-2">
                    <img src="/snow.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered order-2 order-lg-1">
                    <p className="my-0">
                        An invitation for healers and soul sisters - Come and find your deep
                        pause. Take sacred time for yourself, discover the gift of
                        stillness, and reconnect with Mother Earth. Give Away and Take in
                        what comes to you. Our invitation and goal for this retreat is for
                        each of you to deeply come into a place of stillness. Experience
                        SACRED REST and further your journey of Coming Home to Yourself.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center contourBtm lowBright">
                <div className="col-lg-7 py-lg-5 pb-5 px-0">
                    <img src="/sunset2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-center">
                    <p className="my-0">
                        You can choose from a variety of cabins on the property which best
                        suits your needs, however we do suggest if possible you bring a
                        friend who you can experience this time and place with. There are
                        single occupancy, double occupancy, and a small homestead if you
                        come with a group.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center contourBtm">
                <div className="col-lg-7 py-lg-5 px-0 pb-5 order-1 order-lg-2">
                    <img src="/night.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-center order-2 order-lg-1">
                    <p className="my-0">
                        What to Expect: Morning and evening guided meditations Opportunities
                        for powerful self-inquiry and journaling. me for self exploration
                        and reflection. Drumming, sound therapy, cleansing, and healing
                        offerings *You are welcome to bring a musical instrument or offering
                        that would enrich these honored practices. A delicious meal will be
                        provided nightly and shared together at the Healing house followed
                        by a fire ceremony.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center bigBright contourBtm">
                <div className="col-10 col-lg-6 offset-lg-3 offset-1 px-lg-5 px-3 py-5 text-center">
                    <h2>Most Importantly</h2>
                    <p className="my-0">
                        You have access to these sacred waters, 24/7. The three outside
                        pools are open to you anytime. Watch the sun rise and set or take in
                        the galaxy at night.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center lowBright my-0">
                <div className="col-10 offset-1 py-5 text-centered">
                    <h2 className="my-0">Rates</h2>
                </div>
            </div>
            <div className="row text-center lowBright mb-5">
                <div className="col-8 col-lg-3 offset-2 offset-lg-0 rate rate1">
                    <p className="mt-3">Single Shared Room</p>
                    <p>$750</p>
                    <a
                        href="summer_lake/single"
                        className="btn btn-lg pinkBtn mb-3"
                        hidden
                    >
                        Sign Up
                    </a>
                </div>
                <div className="col-8 col-lg-3 offset-2 offset-lg-0 rate rate2">
                    <p className="mt-3">Single Private Room</p>
                    <p>$900</p>
                    <a
                        href="summer_lake/singlePrivate"
                        className="btn btn-lg pinkBtn mb-3"
                        hidden
                    >
                        Sign Up
                    </a>
                </div>
                <div className="col-8 col-lg-3 offset-2 offset-lg-0 rate rate3">
                    <p className="mt-3">Double Private Room</p>
                    <p>$1500</p>
                    <a
                        href="summer_lake/double"
                        className="btn btn-lg pinkBtn mb-3"
                        hidden
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </main>
    );
}
