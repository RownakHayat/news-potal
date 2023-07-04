import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LaftSideNav/LeftSideNav';
import Header from '../Pages/Shared/Header/Header';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none'>
                    
                    <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="7">
                    <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                    <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;