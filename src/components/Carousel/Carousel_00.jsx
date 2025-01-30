import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselData from "./mediaMock.json"
import { Carousel_BlackBox } from './Carousel_BlackBox';

export const Carousel_00 = () => {
  const carouselData = CarouselData

  var sliderSettings ={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div>
      <h1 className='font-semibold text-emerald-300 my-1'>Carousel</h1>
      <Slider {...sliderSettings}>
        {carouselData.map((data) => (
          <Carousel_BlackBox
          name={data.name}
          url={data.url}
          styleType="example3"
          isVideo={data.isVideo}
          />
        ))}
      </Slider>
    </div>
  )
}

