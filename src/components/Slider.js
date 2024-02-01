import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../data/Data";
import CustomButton from "../common/Button";

export default function HomeSlide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-left">
            <div className="col-md-12 col-lg-7">
              <h1 className="mb-5 display-3 text-primary text-start">
                Discover timeless elegance
              </h1>
              <h4 className="mb-3 text-dark text-start">
                Discover our stunning selection of rings brilliant diamonds and
                precious gemstones the eternal bond of love
              </h4>
              <div className="position-relative mx-auto">
                <CustomButton onClick={() => handleClick()}>
                  See All
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
