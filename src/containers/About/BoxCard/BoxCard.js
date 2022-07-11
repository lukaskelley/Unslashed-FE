import React from 'react';
import "./BoxCard.less"
import Shield from "../../../assets/icon/Shield.png"

export const BoxCard = (props) => {
  const { icon, title } = props;

  return (
    <div className="box__card">
      <div className='Boxs_iconsContainer'>
        <div className='Boxs_mainIconContainer'>
          <img className="box_icon" src={icon} alt="arrow"/>
        </div>
        <div className="Boxs_shieldIconContainer">
          <img className="Boxs_shieldIcon" alt="" src={Shield}/>
        </div>
      </div>
      <span className='Boxs_text'>{title}</span>
    </div>
  )
}
