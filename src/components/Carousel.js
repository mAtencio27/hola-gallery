import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
//import "/Users/Marcus/Desktop/hola-gallery/src/Styles/slider-animations.css";
import '../Styles/slider-animations.css'
import '../Styles/styles.css';
import '../Styles/styleguide.css';
import '../Styles/globals.css';
import { Link } from "react-router-dom";

const content = [
  {
    art:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/74aea5fa-6b79-4883-9b47-ec949cadda35-1@1x.png",
    profileMask:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629190ba1cc4e1f4f27e72ec/img/profile-mask-1@2x.png",
    twitterHandle: "@ma10goo",
    description:
      "Tokyo based photographer\nSoftware developer",
    qrCode:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
    solanaLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
    holaplexLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
  },
  {
    art:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/74aea5fa-6b79-4883-9b47-ec949cadda35-1@1x.png",
    profileMask:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629190ba1cc4e1f4f27e72ec/img/profile-mask-1@2x.png",
    twitterHandle: "@Loremipsumdolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
    qrCode:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
    solanaLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
    holaplexLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
  },
  {
    art:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/74aea5fa-6b79-4883-9b47-ec949cadda35-1@1x.png",
    profileMask:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629190ba1cc4e1f4f27e72ec/img/profile-mask-1@2x.png",
    twitterHandle: "@Loremipsumdolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
    qrCode:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
    solanaLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
    holaplexLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
  }
];

const Carousel = (view) => (
  <div>
    <Slider className="card" autoplay="1" infinite duration="8000" previousButton="" nextButton="">
      {view.view.map((item, index) => (
        <div key={index} className="sliderContent">
          <div className="card">
            <div className="artFrame">
              <img className="artFile" src={item.art} alt="art" />
              <div className="artTitle">{"need to check API for NFT name"}</div>
              <div className="artDescription">{"need to check AP for NFT metadata"}</div>
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
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>
);


export default Carousel
