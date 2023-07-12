import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContex } from '../../../Context/AuthProvider/AuthProvider';


const Profile = () => {
    const {user} = useContext(AuthContex);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL)
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(name, photoURLRef.current.value);

    }
    const handleNameChange = event =>{
        setName(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhotoURl</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL}  type="text" placeholder="PhotoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Profile;