import React from "react";

export default function Footer() {
  return (
    <footer>
      <div
        style={{
          backgroundColor: "#9A8350",
          padding: "20px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="text-white">
                Follow Us @TreasureOfficial on Instagram
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#333", padding: "20px", color: "#fff" }}>
        <div className="container">
          <div className="container py-5">
            <div className="row g-5">
              {/* First div on the left */}
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <h1 className="text-white display-6">
                    <span className="fas fa-duotone fa-utensils text-white"></span>{" "}
                    Treasure
                  </h1>
                  <p className=" mb-0 foot-item">
                    Every sparkle a stolen glance
                  </p>
                </a>
              </div>

              {/* Other three divs on the right */}
              <div className="col-lg-9 col-md-6">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-12">
                    <div className="d-flex flex-column e footer-item">
                      <h3 className="text-light mb-5">Navigate</h3>
                      <a href="" className="mb-3 text foot-item">
                        Home
                      </a>
                      <a href="" className="mb-3 foot-item">
                        Bridal Us
                      </a>
                      <a href="" className="mb-3 foot-item">
                        Exclusive
                      </a>
                      <a href="" className="mb-3 foot-item">
                        Collection
                      </a>
                      <a href="" className="mb-3 foot-item">
                        Cart
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="d-flex flex-column e footer-item ">
                      <h3 className="text-light mb-5 ">Need Help?</h3>
                      <a href="" className="mb-3 foot-item">
                        Customer Service
                      </a>
                      <a href="" className="mb-3 foot-item">
                        Store Locator
                      </a>
                      {/* Links */}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="d-flex flex-column e footer-item ">
                      <h3 className="text-light mb-5 ">Social</h3>
                      <a href="" className="mb-3 foot-item">
                        Instagram
                      </a>
                      <a href="" className="mb-3 foot-item">
                        Facebook
                      </a>
                      {/* Links */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}