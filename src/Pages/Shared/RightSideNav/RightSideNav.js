import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContex } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
const {providerLogin} = useContext(AuthContex);

const googleprovider = new GoogleAuthProvider()

    const handleGooleSigni = () =>{
        providerLogin(googleprovider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
       
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGooleSigni} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login in with Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaFacebook className='text-primary'></FaFacebook> Log in with Facebook</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 text-danger'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-primary'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-success'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <BrandCarousel></BrandCarousel>
                
            </div>
        </div>
    );
};

export default RightSideNav;