import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const News = () => {
const news = useLoaderData();
console.log(news);
const {title, details,image_url, category_id }= news;

    return (
        <Card className='mb-4'>
      <Card.Body>
        <Card.Img variant='top' src={image_url}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="primary">
            <FaLongArrowAltLeft className='me-2 text-light'></FaLongArrowAltLeft>
            All News See</Button></Link> 
      </Card.Body>
    </Card>
    );
};

export default News;