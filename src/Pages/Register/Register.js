import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContex } from '../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUser, verifiyEamil } = useContext(AuthContex);
    


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, photoURL, email);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUser(name, photoURL);
                handleEmailVerification()
                toast.success('Please verify your email')
                
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            });
    }
    const handleUpdateUser = (name, photoURL)=>{
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUser(profile)
        .then(() =>{})
        .catch(error => console.error(error));

    }
    const handleEmailVerification =()=>{
        verifiyEamil()
        .then(() =>{

        })
        .catch (error => console.error(error));
    }
    const handleAccepted = event =>{
       setAccepted(event.target.checked);
    }
    return (
        <Form onSubmit={handleSubmit} className='mb-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo</Form.Label>
                <Form.Control name='photoURL' type="photoURL" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"
        onClick={handleAccepted} 
        label={<>Accept <Link>Condition</Link></>} 
        />
      </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;