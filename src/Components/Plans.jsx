import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Plans = () => {
    return (
        <div className="py-5" style={{ background: '#1c1c1c' }}>
            <div className="container">

                <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: 'white' }}>
                    READY TO START <span style={{ color: '#ff6600' }}>YOUR JOURNEY</span> WITH US
                </h2>

                <div className="row">

                    <div className="col-md-4">
                        <div
                            className="card text-center shadow-sm"
                            style={{ backgroundColor: 'lightblue', height: '350px' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title mb-3" style={{ fontWeight: '600' }}>BASIC PLAN</h5>
                                <h2 className="card-text" style={{ fontWeight: 'bold' }}>$25</h2>
                                <ul className="list-unstyled my-4">
                                    <li>2 hours of exercises</li>
                                    <li>Free consultation of Coaches</li>
                                    <li>Access To The Community</li>
                                </ul>
                                <button className="btn btn-light">Join Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div
                            className="card text-center shadow-sm"
                            style={{ backgroundColor: 'orange', height: '350px' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title mb-3" style={{ fontWeight: '600' }}>PREMIUM PLAN</h5>
                                <h2 className="card-text" style={{ fontWeight: 'bold' }}>$30</h2>
                                <ul className="list-unstyled my-4">
                                    <li>5 hour of exercises</li>
                                    <li>Free consultation of Coaches</li>
                                    <li>Access to minibar</li>
                                </ul>
                                <button className="btn btn-light">Join Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div
                            className="card text-center shadow-sm"
                            style={{ backgroundColor: 'lightblue', height: '350px' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title mb-3" style={{ fontWeight: '600' }}>PRO PLAN</h5>
                                <h2 className="card-text" style={{ fontWeight: 'bold' }}>$45</h2>
                                <ul className="list-unstyled my-4">
                                    <li>8 hours of exercises</li>
                                    <li>Consultation of Private Coach</li>
                                    <li>Free Fitness Merchandise</li>
                                </ul>
                                <button className="btn btn-light">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
