import React from "react";
import Slider from "react-slick";

import {SlideBox}  from "../../About/Slider/SlideBox/SlideBox"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Avatar1 from "../../../assets/slider/MonaElIsa.png";
import Avatar2 from "../../../assets/slider/MounirBen2.png";
import "./Slider.less"


export const SimpleSlider =() =>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return <ul style={{ margin: '0px' }}>{dots}</ul>;
      },
      customPaging: (pagi, i) => {
        const style = {
          width: 13,
          height: 13,
          display: 'inline-block',
          backgroundImage: `url(../../../assets/slider/MonaElIsa.png)`, // need to change as navigator-active.png this when active
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        };
        return <a className="slick-dot" style={style} />;
      },
    };
    return (
      <div>
        <Slider {...settings}>
          <SlideBox 
            avatar={Avatar1} 
            name="Mona El lsa" 
            jobtitle="CEO at " 
            job="Avantgarde Finance" 
            content="In the history of trade, insurance has always removed some of the biggest frictions to trade and still does today. I’m super excited about Unslashed doing this for the crypto economy" 
          />
          <SlideBox
            avatar={Avatar2}
            name="Mounir Benchemled" 
            jobtitle="CEO at " 
            job="Paraswap.io" 
            content="Over the last year, the team behind Unslashed has combined their Tech and Finance expertise to build one of the most sophisticated yet easy to use insurance product in the DeFi space. I am excited to see their efforts come to fruition!"
           />
        </Slider>
      </div>
    );
  }