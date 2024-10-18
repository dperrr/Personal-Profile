import React from 'react';
import Mynavbar from '../components/MyNavbar';

function Skills() {
    return (
        <>
            <Mynavbar />
            <div className="container mt-5"> 
                <h1 className="text-center mb-4">My Skills</h1> 

                <div className="card glass-effect">
                    <div className="card-body">
                        <div className="row text-center my--skills">
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-javascript-plain colored " style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">JavaScript</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-python-plain colored " style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">Python</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-java-plain colored " style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">Java</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-azuresqldatabase-plain colored devi--icon" style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">Azure SQL</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-bootstrap-plain colored " style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">Bootstrap</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-github-original colored " style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">GitHub</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 devi--icon">
                                <i className="devicon-vscode-plain colored " style={{ fontSize: '5rem' }}></i>
                                <p className="mt-2">VSCode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
