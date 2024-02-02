import React from "react";

import CustomButton from "../common/Button";

export default function Features() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div
        className="container-fluid py-5 mb-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#9A8350",
          padding: "20px",
        }}
      >
        <div className="row g-5">
          <div className="col-md-4 col-lg-4 col-xl-4 text-center">
            <h1 style={{ color: "white", marginBottom: "10px" }}>20</h1>
            <h1 style={{ color: "white", marginBottom: "20px" }}>
              All over world
            </h1>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 text-center">
            <h1 style={{ color: "white", marginBottom: "10px" }}>12K+</h1>
            <h1 style={{ color: "white", marginBottom: "20px" }}>
              Product Sales
            </h1>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 text-center">
            <h1 style={{ color: "white", marginBottom: "10px" }}>170+</h1>
            <h1 style={{ color: "white", marginBottom: "20px" }}>
              Products Available
            </h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-6">
              <div
                className="col-md-12 col-lg-7"
                style={{ position: "relative" }}
              >
                <div className="">
                  <img
                    src="../assets/img/image3.png"
                    alt="Main "
                    style={{ width: "100%" }}
                  />
                  <img
                    src="../assets/img/image4.png"
                    alt="Small "
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: "-100px",
                      width: "200px",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <h1 className="mb-4 display-3 text-secondary text-center text-lg-start">
                Jewellery that as beautiful as you are
              </h1>
              <h5 className="mb-5 text-dark text-center text-lg-start">
                Discover our stunning selection of rings brilliant diamonds and
                precious gemstones the eternal bond of love
              </h5>
              <div className="position-relative mx-auto text-center text-lg-start">
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
