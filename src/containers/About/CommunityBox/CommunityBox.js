import React from 'react';
import "./CommunityBox.less"
import ArrowRight2 from "../../../assets/icon/ArrowUpRight2.svg"

export const CommunityBox = (props) => {
  const { className, title, content } = props;
  
  return (
    <a href="https://discord.gg/jQFxqTpbYC" className="Community_developersMainContainer">
      <div className="GradiantBorder_container">
        <div className="GradiantBorder_innerContainer">
          <div className="Community_developersContainer">
            <div className={className}>
              <div className="Community_BoxTitleContainer">
                <span className="Community_boxTitle">{title}<img className="Community_titleArrowUp" src={ArrowRight2} alt="arrow up icon" /></span>
                <span className="Community_boxDescription">{content}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </a>
  )
}
