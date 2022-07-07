import React from 'react';
import "./BrandCard.less"
import ArrowRight from "../../../assets/icon/ArrowRight.svg"

export const BrandCard = (props) => {
  const { icon, title } = props;

  return (
    <div class="Brands_brandContainer">
      <div class="Brands_logoWithText">
        <div class="Brands_logoContainer">
          <img class="Brands_logo" src={icon} alt="Paraswap logo"/>
        </div>
        <span class="Brands_name">{title}</span>
      </div>
      <div class="Brands_learnMoreContainer">
        <span class="Brands_learnMore">Learn more</span>
        <img class="Brands_learnMoreSvg" src={ArrowRight} alt="arrow right"/>
      </div>
    </div>
  )
}
