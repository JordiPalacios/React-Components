import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel_00 = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <video src="src/components/Carousel/media/videoMobile.mov" controls/>
      </div>
      <div>
        <video src="src/components/Carousel/media/videoMobile.mov" controls/>
      </div>
      <div>
        <video src="src/components/Carousel/media/videoMobile.mov" controls/>
      </div>
      <div>
        <video src="src/components/Carousel/media/videoMobile.mov" controls/>
      </div>
    </Slider>
  )
}

