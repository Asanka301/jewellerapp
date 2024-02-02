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
        <div className="container text-right">
          <div className="container py-5 text-righttext-right">
            <div className="row g-5">
              {/* Left-sided column */}
              <div className="col-lg-3 col-md-6 mb-5">
                <a href="#">
                  <div className="d-flex align-items-center">
                    {/* Left-sided column for the image */}
                    <div>
                      <img
                        src="../assets/img/logo.png"
                        alt="Logo"
                        className="logo-image me-2"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    {/* Right-sided column for heading and paragraph */}
                    <div className="ms-4">
                      <h3 className="text-white display-4">Treasure</h3>
                      <p className="mb-2 foot-item">
                        Every sparkle a stolen glance
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Right-sided columns */}
              <div className="col-lg-9 col-md-6">
                <div className="row g-5">
                  {/* Column 1 */}
                  <div className="col-lg-2 col-md-10 mb-5">
                    <div className="d-flex flex-column e footer-item"></div>
                  </div>
                  {/* Column 2 */}
                  <div className="col-lg-2 col-md-10 mb-5">
                    <div className="d-flex flex-column e footer-item "></div>
                  </div>
                  {/* Column 3 */}
                  <div className="col-lg-2 col-md-10 mb-5">
                    <div className="d-flex flex-column e footer-item">
                      <h3 className="text-light mb-5">Navigate</h3>
                      <a href="/" className="mb-3 text foot-item">
                        Home
                      </a>
                      <a href="/" className="mb-3 foot-item">
                        Bridal Us
                      </a>
                      <a href="/" className="mb-3 foot-item">
                        Exclusive
                      </a>
                      <a href="/" className="mb-3 foot-item">
                        Collection
                      </a>
                      <a href="/" className="mb-3 foot-item">
                        Cart
                      </a>
                    </div>
                  </div>
                  {/* Column 4 */}
                  <div className="col-lg-3 col-md-10 mb-5">
                    <div className="d-flex flex-column e footer-item ">
                      <h3 className="text-light mb-5 ">Need Help?</h3>
                      <a href="/" className="mb-3 foot-item">
                        Customer Service
                      </a>
                      <a href="/" className="mb-3 foot-item">
                        Store Locator
                      </a>
                    </div>
                  </div>
                  {/* Column 5 */}
                  <div className="col-lg-3 col-md-12 mb-5 text-right">
                    <div className="d-flex flex-column e footer-item text-right">
                      <h3 className="text-light mb-5 ">Social</h3>
                      <a href="/" className="mb-3 foot-item ">
                        Instagram
                      </a>
                      <a href="/" className="mb-3 foot-item">
                        Facebook
                      </a>
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
