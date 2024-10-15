import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';

function Approuter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default Approuter;
