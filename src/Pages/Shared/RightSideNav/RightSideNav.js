import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login in with Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaFacebook></FaFacebook> Log in with Facebook</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <BrandCarousel></BrandCarousel>
                
            </div>
        </div>
    );
};

export default RightSideNav;