import React from 'react';
import Slider from 'react-slick';
import './Slider.css'

const sliderPics = [
          {
            PicUrl: '/featurepics/jeroen_van_loon.jpg',
            PicHeadline: "Jeroen Van Loon",
            PicTagline: "The buyer of Cellout.me will own an extremely personal ‘self portrait’ and will become co-owner of the artist’s DNA."
          },
          {
            PicUrl: '/featurepics/martynka.jpg',
            PicHeadline: "Martynka Wawrzyniak",
            PicTagline: "Body odor as olfactory portrait... "
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
            <div className="slider-content">  
            <img className="slider-pic" src={one.PicUrl} />
            <h3 className="slider-headline">{one.PicHeadline}<br /><div className="tagline">"{one.PicTagline}"</div></h3>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}