import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from '../components/MyNavbar';
import '../styles/homestyle.css';

function Home() {
    return (
        <>
            <Mynavbar />
            <div className="home-container"> 
                <h2 className="glass-effect">Welcome to My Profile!</h2> {/* Glass effect class */}
            </div>
        </>
    );
}

export default Home;
