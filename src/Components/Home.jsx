import React from 'react'
import hardwork from '../Static/hardwork.jpeg'
import './Home.css'


const Home = () => {
    return (
        <div className="full-page">


            <div className="row m-0">

                <div className="col-md-6 d-flex flex-column justify-content-center p-5">
                    <div className="sub-heading text-warning fw-semibold text-uppercase mb-3">
                        THE BEST FITNESS CLUB IN THE CITY
                    </div>
                    <h1 className="main-heading display-4 fw-bold mb-3 text-white">
                        SHAPE<br />YOUR<br />BODY
                    </h1>
                    <p className="lead text-white mb-4">
                        We will help you to shape and build your body
                        and live up to the fullest.
                    </p>
                    <div className="d-flex gap-4">
                        <div>
                            <h2 className="text-warning fw-bold fs-2 mb-0">5</h2>
                            <p className="mb-0 text-white">Expert Coaches</p>
                        </div>
                        <div>
                            <h2 className="text-warning fw-bold fs-2 mb-0">+500</h2>
                            <p className="mb-0 text-white">Members Joined</p>
                        </div>
                        <div>
                            <h2 className="text-warning fw-bold fs-2 mb-0">+20</h2>
                            <p className="mb-0 text-white">Fitness Programs</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 position-relative p-5 d-flex justify-content-center align-items-center">

                    <div className="bg-warning position-absolute top-50 start-100 translate-middle-y shape-bg"></div>


                    <img
                        src={hardwork}
                        alt="Athlete"
                        className="img-fluid athlete-image position-relative move-square"
                        style={{ width: "500px", height: "auto" }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
