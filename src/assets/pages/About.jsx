import React from 'react';
import Mynavbar from '../components/Mynavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/aboutstyle.css';

function About() {
    return (
        <>
            <Mynavbar />

            <div className="container mt-5"> 
                <h1 className="text-center mb-4">About Me</h1> 
                
                <div className="card glass-effect">
                    <div className="card-body">
                        <h5 className="card-title fw-medium fs-1 fs-md-2 fs-lg-3">Name: </h5> 

                        <p className="card-text fs-5 fs-md-6 fs-lg-7"> 
                           I am Jasper Dan S. Rosellon
                        </p>

                        <h5 className="card-title fw-medium fs-1 fs-md-2 fs-lg-3">Current Education</h5>
                        <p className="card-text fs-5 fs-md-6 fs-lg-7">
                            I am currently a 3rd-year Bachelor of Science in Computer Science at Pamantasan ng Cabuyao.
                        </p>

                        <h5 className="card-title fw-medium fs-1 fs-md-2 fs-lg-3">Work Experience</h5>
                        <p className="card-text fs-5 fs-md-6 fs-lg-7">
                           I am currently looking for work experience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
