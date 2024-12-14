import React from 'react'
import Slider from 'react-slick';
import slide1 from "../../assets/images/logo.png"
import slide2 from "../../assets/images/logo.png"
import slide3 from "../../assets/images/logo.png"
export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  };

  return (
    <>
    <Slider {...settings}>
    <div>
        <img className='slide' src={slide1} alt="" />
      </div>
      <div>
        <img className='slide' src={slide2} alt="" />
      </div>
      <div>
        <img className='slide' src={slide3} alt="" />
      </div>
    </Slider>
    </>
  )
}
