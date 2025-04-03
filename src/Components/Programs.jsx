import React from 'react';

const Programs = () => {
    return (
        <div style={{ backgroundColor: '#1c1c1c', minHeight: '100vh' }}>

            <div className="programs-section py-5">
                <div className="container">

                    <h2 className="text-center text-white mb-5" style={{ letterSpacing: '1px' }}>
                        EXPLORE OUR PROGRAMS TO SHAPE YOUR BODY
                    </h2>


                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="card text-white" style={{ background: 'orange', height: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Muscle Training</h5>
                                    <p className="card-text mt-4">
                                        In this program, you are trained to improve your strength through many exercises.
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 mb-3">
                                    <button className="btn btn-light">Join Now</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card text-white" style={{ backgroundColor: 'orange', height: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Cardio Training</h5>
                                    <p className="card-text mt-4">
                                        In this program, you are trained to do sequential moves in range of 20 until 30 minutes.
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 mb-3">
                                    <button className="btn btn-light">Join Now</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card text-white" style={{ backgroundColor: 'orange', height: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Fat Burning</h5>
                                    <p className="card-text mt-4">
                                        This program is suitable for those who want to get rid of their fat and lose weight.
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 mb-3">
                                    <button className="btn btn-light">Join Now</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card text-white" style={{ backgroundColor: 'orange', height: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Machineless Workout</h5>
                                    <p className="card-text mt-4">
                                        This program is designed for those who exercise only for their body fitness, not body building.
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 mb-3">
                                    <button className="btn btn-light">Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
