import React from 'react';
import "./BrandCard.less"
import ArrowRight from "../../../assets/icon/ArrowRight.svg"

export const BrandCard = (props) => {
  const { icon, title } = props;

  return (
    <div className="Brands_brandContainer">
      <div className="Brands_logoWithText">
        <div className="Brands_logoContainer">
          <img className="Brands_logo" src={icon} alt="Paraswap logo"/>
        </div>
        <span className="Brands_name">{title}</span>
      </div>
      <div className="Brands_learnMoreContainer">
        <span className="Brands_learnMore">Learn more</span>
        <img className="Brands_learnMoreSvg" src={ArrowRight} alt="arrow right"/>
      </div>
    </div>
  )
}
