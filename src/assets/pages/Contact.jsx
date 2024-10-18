import React, { useState } from 'react';
import Mynavbar from '../components/MyNavbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Success from '../components/Sucess.jsx'; 

const initialValue = {
    username: "",
    email: "",
    message: ""
};

function Contact() {
    const [values, setValues] = useState(initialValue);
    const [isSubmitted, setIsSubmitted] = useState(false); 


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };


    if (isSubmitted) {
        return <Success values={values} />;
    }

    return (
        <>
            <Mynavbar />
            <div className='container mt-5 p-5'>
                <Form onSubmit={handleSubmit}> 
                    <Form.Group className="mb-3" controlId="userName">
                        <Form.Label className='fw-medium'>Name: </Form.Label>
                        <Form.Control
                            type="text"
                            name="username"  
                            placeholder="Enter Name"
                            value={values.username}
                            onChange={handleInputChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userEmail">
                        <Form.Label className='fw-medium'>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email" 
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleInputChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userMessage">
                        <Form.Label className='fw-medium'>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message" 
                            rows={3}
                            value={values.message}
                            onChange={handleInputChange} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Contact;
