import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import '../Styles/slider-animations.css'
import '../Styles/styles.css';
import '../Styles/globals.css';
import { Link } from "react-router-dom";


const Carousel = (view) => {
  
  return (
  <div>
    <Slider className="card" autoplay="1" infinite duration="8000" previousButton="" nextButton="">
      {view.view.map((item, index) => (
        <div key={index} className="sliderContent">
          <div className="card">
            <div className="artFrame">
              <img className="artFile" src={item.art} alt="art" />
              <div className="artTitle">{item.name}</div>
              <div className="artDescription">{"need to check API for NFT metadata"}</div>
            </div>
            <div className="artist">
              <div className="profileMask">
                <img
                  className="profileImage"
                  src={item.profileMask}
                  alt="pfp"
                />
                <div className="twitterHandleText">
                  {item.twitterHandle}
                </div>
              </div>
              <div className="artistBioText">{item.description}</div>
            </div>
            <div className="qrCodeFrame">
              <Link to="/GetNft">
                <img
                  className="qrCodeImage"
                  src={item.qrCode}
                  alt="qr code"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
)};



export default Carousel
