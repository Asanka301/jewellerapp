import React, { useState } from "react";
import { products } from "../data/Data";
import { Link } from "react-router-dom";

import { useEffect } from "react";

export default function Products() {
  const [menuItems, setMenuItem] = useState(products);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen is in mobile view
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // useEffect hook to add event listener for window resize
  useEffect(() => {
    checkMobileView(); // Check on initial render

    // Add event listener for window resize
    window.addEventListener("resize", checkMobileView);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const filterItems = (category) => {
    const newItems = products.filter((item) => item.category === category);
    setMenuItem(newItems);

    // for all data show
    if (!category || category === "all") {
      setMenuItem(products);
      return;
    }
  };

  const handleShowAllItems = () => {
    filterItems(); // Call filterItems without a category to show all items
  };
  return (
    <>
      <div className="container-fluid fruite py-0">
        <div className="container py-2">
          <div className="text-center">
            {/* Render ToggleWeb component in normal view */}
            {!isMobile && (
              <>
                {" "}
                <div className="row g-4">
                  <div className="col-lg-4 text-start">
                    <h2>Featured Products</h2>
                  </div>
                  <div className="col-lg-8 text-end">
                    <ul
                      className="nav nav-pills d-inline-flex text-center mb-6 d-lg-inline-flex"
                      key={products.id}
                    >
                      <li className="nav-item">
                        <a
                          className="m-2 py-2 bg-light  active"
                          onClick={handleShowAllItems}
                        >
                          <h4 style={{ width: "80px" }}>All</h4>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="py-2 m-2 bg-light "
                          onClick={() => filterItems("New")}
                        >
                          <h4 style={{ width: "100px" }}>New</h4>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="m-2 py-2 bg-light "
                          onClick={() => filterItems("Necklaces")}
                        >
                          <h4 style={{ width: "130px" }}>Necklaces</h4>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="m-2 py-2 bg-light"
                          onClick={() => filterItems("Bracelets")}
                        >
                          <h4 style={{ width: "130px" }}>Bracelets</h4>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className=" m-2 py-2 bg-light "
                          onClick={() => filterItems("Ear studs")}
                        >
                          <h4 style={{ width: "130px" }}>Ear Studs</h4>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {/* Render ToggleMenu component in mobile view */}
            {isMobile && (
              <>
                <button
                  className={`border  mb-2 ${isNavbarOpen ? "collapsed" : ""}`}
                  type=""
                  onClick={toggleNavbar}
                  aria-label="Toggle navigation"
                >
                  {isNavbarOpen ? (
                    <h4 className="mb-2" aria-hidden="false">
                      Categories
                    </h4>
                  ) : (
                    <h4 className="">Categories </h4>
                  )}
                </button>

                <div
                  className={`collapse navbar-collapse justify-content-center ${
                    isNavbarOpen ? "show" : ""
                  } bg-white`}
                >
                  <div className="navbar-nav">
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={handleShowAllItems}
                    >
                      <h4 style={{ width: "130px" }}>All</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItems("New")}
                    >
                      <h4 style={{ width: "130px" }}>New</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItems("Necklaces")}
                    >
                      <h4 style={{ width: "130px" }}>Necklaces</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItems("Bracelets")}
                    >
                      <h4 style={{ width: "130px" }}>Bracelets</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItems("Ear studs")}
                    >
                      <h4 style={{ width: "130px" }}>Ear Studs</h4>
                    </Link>
                    <Link to="/cart" className="nav-item nav-link me-3">
                      <span className="d-none d-md-inline"></span>
                    </Link>
                  </div>
                </div>
              </>
            )}

            <div>
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {menuItems.map((val, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={val.product_img}
                                style={{ width: "500px", height: "300px" }}
                                className="img-fluid rounded-top"
                                alt={val.description}
                              />
                            </div>

                            <div className="p-2  border-secondary border-top-4  rounded-bottom">
                              <h6>{val.product_name}</h6>

                              <div className="p-2  border-secondary border-top-4  rounded-bottom">
                                <h4 className="">RS. {val.price}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
