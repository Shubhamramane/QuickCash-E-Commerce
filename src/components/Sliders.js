import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Sliders = () => {
    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 4,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 1,
            },
        },
    }
  return (
<div>
<OwlCarousel className='owl-theme' loop margin={1} autoplay={true} nav={true} dots={false} items={3} touchDrag={true} lazyLoad={true}
         responsive={state.responsive}>
    <div className='item1'>
        <h4 className="carousel-text-h4">We are serious about providing our best services to all the customers we help, 
            Customers satisfaction is our number one priority.
        </h4>
        <h6 className="carousel-text-h6">
        Robert Fox
        </h6>
        <h6 className="carousel-text-h66">
        CEO & Head of Products
        </h6>
    </div>
    <div className='item1'>
        <h4 className="carousel-text-h4">We are serious about providing our best services to all the customers we help, 
            Customers satisfaction is our number one priority.
        </h4>
        <h6 className="carousel-text-h6">
        Robert Fox
        </h6>
        <h6 className="carousel-text-h66">
        CEO & Head of Products
        </h6>
    </div>
    <div className='item1'>
        <h4 className="carousel-text-h4">We are serious about providing our best services to all the customers we help, 
            Customers satisfaction is our number one priority.
        </h4>
        <h6 className="carousel-text-h6">
        Robert Fox
        </h6>
        <h6 className="carousel-text-h66">
        CEO & Head of Products
        </h6>
    </div>
    <div className='item1'>
        <h4 className="carousel-text-h4">We are serious about providing our best services to all the customers we help, 
            Customers satisfaction is our number one priority.
        </h4>
        <h6 className="carousel-text-h6">
        Robert Fox
        </h6>
        <h6 className="carousel-text-h66">
        CEO & Head of Products
        </h6>
    </div>
</OwlCarousel>
    </div>
  )
}

export default Sliders;