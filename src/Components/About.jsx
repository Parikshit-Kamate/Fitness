import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import dumbbell from '../Static/dumbbell.jpg';
import workout from '../Static/workout.jpg';
import man from '../Static/man.jpg';

const About = () => {
  return (
    <div className='about-page'>

      <div className="container my-5">

        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src={workout}
              alt="Workout"
              className="img-fluid rounded floating"
              style={{ width: '320px' }}
            />
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src={man}
              alt="Man with belt"
              className="img-fluid rounded floating-square"
              style={{ width: '320px' }}
            />
          </div>
        </div>


        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src={dumbbell}
              alt="Cable close-up"
              className="img-fluid rounded floating-reverse"
              style={{ width: '320px' }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4 fw-bold text-white">Why Choose Us?</h2>
            <ul className="list-unstyled text-white">
              <li className="mb-2">We Have 5 Best Expert Trainers</li>
              <li className="mb-2">Train Smarter and Faster</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
