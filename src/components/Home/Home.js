import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Packages from '../Packages/Packages';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={slide1} alt="First slide" />
              
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide2} alt="Second slide" />

              
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide3} alt="Third slide" />              
            </Carousel.Item>
          </Carousel>
        </div>
        <Packages></Packages>
        <div className='text-center mb-5'>
          <button type="button" class="btn btn-primary">
            <Link
              className="text-white text-decoration-none"
              to="/packages"
              element={<Packages></Packages>}
            >
              Show All Packages
            </Link>
          </button>          
        </div>
        <div>
          <h1 className='text-primary text-center mt-3 mb-5'>Customer Testimonials</h1>
        <Testimonial></Testimonial>
        </div>
      </div>
    );
};

export default Home;