import React from 'react';
import MyNavbar from './Mynavbar.jsx';

function Success({ values }) {
    return (
        <>
            <MyNavbar />
            <div className="home-container mt-5 glass-effect">
                <h1>Thank you, {values.username}!</h1>
                <p>Your message has been sent successfully.</p>
                <h3>Submitted Details:</h3>
                <p><strong>Email:</strong> {values.email}</p>
                <p><strong>Message:</strong> {values.message}</p>
            </div>
        </>
    );
}

export default Success;
