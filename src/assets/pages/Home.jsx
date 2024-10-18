import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homestyle.css';
import Mynavbar from '../components/Mynavbar';


function Home() {
    return (
        <>
            <Mynavbar />
            <div className="home-container"> 
                <h2 className="glass-effect">Welcome to My Profile!</h2>
                <p>I am Jasper Dan S. Rosellon currently enrolled at 
                    Pamantasan ng cabuyao</p>
            </div>
            
    
        </>
    );
}

export default Home;
