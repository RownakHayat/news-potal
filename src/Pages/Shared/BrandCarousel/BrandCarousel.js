import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/1.png'
import Brand2 from '../../../assets/brands/2.png'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;