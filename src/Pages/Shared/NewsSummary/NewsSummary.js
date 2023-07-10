import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummary = ({ news }) => {
    const { _id, title, author, total_view, details, image_url, rating } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className=" d-flex">
                    <Image
                        className="me-2"
                        style={
                            { height: '60px' }
                        }
                        src={author?.img}
                        roundedCircle />
                    <div >
                        <h5 className='mb-0'>{author?.name}</h5>
                        <h6>{author?.published_date}</h6>
                    </div>

                </div>
                <div className="">
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <div>
                    {
                        details.length > 250 ?<>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`} className='text-warning'>Read more</Link></>: <div>{details}</div>
                    }
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div className="">
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating.number}</span>
                </div>
                <div className="">
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;