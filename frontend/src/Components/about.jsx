import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css";
import "./t.js";


function FAQ() {
  

  return (
    <div class="responsive-container-block outer-container">
  <div class="responsive-container-block inner-container">
    <p class="text-blk section-head-text">
      Our Team
    </p>
    <p class="text-blk section-subhead-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna
    </p>
    <div class="responsive-container-block">
      <div class="swiper team-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"/>
              </div>
              <div class="card-content">
                <p class="text-blk name">
                  Roger Rubin
                </p>
                <p class="text-blk position">
                  Lorem ipsum
                </p>
                <p class="text-blk testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw42.png"/>
              </div>
              <div class="card-content">
                <p class="text-blk name">
                  Roger Rubin
                </p>
                <p class="text-blk position">
                  Lorem ipsum
                </p>
                <p class="text-blk testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw40.png"/>
              </div>
              <div class="card-content">
                <p class="text-blk name">
                  Roger Rubin
                </p>
                <p class="text-blk position">
                  Lorem ipsum
                </p>
                <p class="text-blk testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"/>
              </div>
              <div class="card-content">
                <p class="text-blk name">
                  Roger Rubin
                </p>
                <p class="text-blk position">
                  Lorem ipsum
                </p>
                <p class="text-blk testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw42.png"/>
              </div>
              <div class="card-content">
                <p class="text-blk name">
                  Roger Rubin
                </p>
                <p class="text-blk position">
                  Lorem ipsum
                </p>
                <p class="text-blk testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination container-block">
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default FAQ;
