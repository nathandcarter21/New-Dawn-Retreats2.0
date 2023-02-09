import Carousel from '../../../components/Carousel'
export default function Summer_Lake() {
    return (
        <main className="container-fluid pr-0 mt-4">
            <div className="row text-center">
                <div className="contourBtm mt-3">
                    <h1 className="mb-5">Information for the Mexico Retreat</h1>
                </div>
            </div>
            <div className="row text-center align-items-center lowBright contourBtm">
                <div className="row text-center align-items-center lowBright">
                    <div className="col-lg-7 py-lg-5 pb-5 px-0">
                        <img src="/beachSunset2.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 px-5 py-lg-5 pb-5 text-center">
                        <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto autem fuga nostrum, molestias incidunt perspiciatis. Eveniet modi ipsa aliquid exercitationem. Necessitatibus asperiores nulla in dicta quis inventore omnis error consequatur.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row text-center align-items-center contourBtm">
                <div className="col-lg-7 py-lg-5 px-0 pb-5 order-1 order-lg-2">
                    <h2 className='p-3'>Activities</h2>
                    <Carousel />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-centered order-2 order-lg-1">
                    <p className="my-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio rerum aliquam consectetur dolore, reiciendis rem deserunt! Harum dolore facilis, tenetur numquam esse voluptates vitae commodi, sit ipsum ab reprehenderit.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center contourBtm lowBright">
                <div className="col-lg-7 py-lg-5 pb-5 px-0">
                    <img src="/welcome.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-center">
                    <p className="my-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe blanditiis quisquam quas consequuntur assumenda sapiente laboriosam corporis ullam aliquam in omnis quae nesciunt ducimus, sequi qui cupiditate officia. Eveniet!
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center contourBtm">
                <div className="col-lg-7 py-lg-5 px-0 pb-5 order-1 order-lg-2">
                    <img src="/jungle.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 px-5 py-lg-5 pb-5 text-center order-2 order-lg-1">
                    <p className="my-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam totam porro hic similique dolores tempora saepe vero in vel error quisquam explicabo fugiat facilis officiis eum doloribus, officia ad!
                        Corrupti nihil assumenda voluptas eos perferendis veritatis sit odio vel. Iusto temporibus earum vitae nemo, corrupti porro explicabo fuga non neque quaerat quibusdam ratione quod. Illo vel quia illum? Minima.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center bigBright contourBtm">
                <div className="col-10 col-lg-6 offset-lg-3 offset-1 px-lg-5 px-3 py-5 text-center">
                    <h2>Most Importantly</h2>
                    <p className="my-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus ullam nulla id ea, inventore officia quos velit, animi iste pariatur quis magnam minus necessitatibus illo voluptates consequuntur aut voluptatum.
                    </p>
                </div>
            </div>
            <div className="row text-center align-items-center lowBright my-0">
                <div className="col-10 offset-1 py-5 text-centered">
                    <h2 className="my-0">Prices</h2>
                </div>
            </div>
            <div className="row text-center lowBright mb-5">
                <div className="col-8 col-lg-3 offset-2 offset-lg-0 rate rate1">
                    <p className="mt-3">Single</p>
                    <p>$600 w/o airfair</p>
                    <a
                        href="https://buy.stripe.com/8wMbK54NKcFG64wdQU"
                        className="btn btn-lg pinkBtn mb-3">
                        Sign Up
                    </a>
                </div>
                <div className="col-8 col-lg-3 offset-2 offset-lg-0 rate rate2">
                    <p className="mt-3">Double</p>
                    <p>$1100 w/o airfair</p>
                    <a
                        href="https://buy.stripe.com/5kA9BXfso8pqfF6cMR"

                        className="btn btn-lg pinkBtn mb-3">
                        Sign Up
                    </a>
                </div>
                <div className="col-8 col-lg-3 offset-2 offset-lg-0 rate rate3">
                    <p className="mt-3">Upgraded Spa Package</p>
                    <p>$200</p>
                    <p>Includes massages and salt scrubs</p>
                    <a
                        href="https://buy.stripe.com/dR6eWh2FC356eB214a"
                        className="btn btn-lg pinkBtn mb-3">
                        Sign Up
                    </a>
                </div>
            </div>
        </main>
    );
}
