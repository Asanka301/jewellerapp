import React from "react";

import CustomButton from "../common/Button";

export default function Features() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#9A8350",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white", marginBottom: "10px" }}>20</h3>
          <h3 style={{ color: "white", marginBottom: "20px" }}>
            All over world
          </h3>
        </div>
        <div
          style={{
            height: "50px",
            borderLeft: "2px solid white",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white", marginBottom: "10px" }}>12K+</h3>
          <h3 style={{ color: "white", marginBottom: "20px" }}>
            Product Sales
          </h3>
        </div>
        <div
          style={{
            height: "50px",
            borderLeft: "2px solid white",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white", marginBottom: "10px" }}>170+</h3>
          <h3 style={{ color: "white", marginBottom: "20px" }}>
            Products Available
          </h3>
        </div>
      </div>

      <div className="container-fluid py-5 mb-5">
        <div className="container py-5 ">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
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
                      width: "300px",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-5">
              <h1 className="mb-5 display-3 text-primary">
                Jewellery that as beautiful as you are
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
