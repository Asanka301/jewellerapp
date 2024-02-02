import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../data/Data";
import CustomButton from "../common/Button";

export default function HomeSlide() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="container-fluid py-5 mb-8 mt-4 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-left">
            <div className="col-md-12 col-lg-6">
              <h1 className="mb-0 display-3 text-secondary text-start">
                Discover
              </h1>
              <h1 className="mb-5 display-3 text-secondary text-start">
                Timeless Elegance
              </h1>
              <h5 className="mb-4  text-start">
                Discover our stunning selection of rings brilliant diamonds and
                precious gemstones the eternal bond of love
              </h5>
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
