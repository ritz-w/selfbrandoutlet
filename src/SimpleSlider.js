import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slider.css'

const sliderPics = [
          {
            PicUrl: '/featurepics/jeroen_van_loon.jpg'
          },
          {
            PicUrl: '/featurepics/martynka.jpg'
          }
        ]

export default class SimpleSlider extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="slider-box">    
        {sliderPics.map (one => (
          <div>  
            <img className="slider-pic" src={one.PicUrl} />
          </div>
        ))}
      </Slider>
    );
  }
}