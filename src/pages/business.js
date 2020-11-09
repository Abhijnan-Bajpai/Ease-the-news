import React from 'react';
import './App.css';
import './title'
import SimpleSlide from './title';
import NewsBox from './news_box';
import './index.css';
import Background from './Background.mp4';

function Business() {
  return (
    <div>
      <div class="fullscreen-bg">
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
      <source src={Background} type="video/mp4"/>
    </video>
  </div>
    <div>
      <SimpleSlide></SimpleSlide>
      <NewsBox></NewsBox>
    </div>
  </div>
  );
}

export default Business;