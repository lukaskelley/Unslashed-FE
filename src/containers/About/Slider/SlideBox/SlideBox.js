import React from 'react';
import "./SlideBox.less"

export const SlideBox = (props) => {
  const { avatar, name , jobtitle, job, content } = props;

  return (
    <div class="Testimonials_boxContainer">
      <div class="Testimonials_innerBox">
        <div class="Testimonials_avatarBox">
          <img width="74" height="69" src={avatar} alt="Mona El Isa"/>
            <div class="Testimonials_personData">
              <span class="Testimonials_personName">{name}</span>
              <span class="Testimonials_personPosition">{jobtitle}
              <span class="Testimonials_personCompany">{job}</span></span>
            </div>
          </div>
          <p class="Testimonials_boxParagraph">
            "{content}"
          </p>
      </div>
    </div>
  )
}
