import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <div className="container-fluid px-0 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white w-100">
          <div className="container pt-3">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src="../assets/img/logo.png"
                alt="Logo"
                className="logo-image me-2"
              />
              <h1 className="text-primary display-6 mb-0">
                <span className="fa-solid fa-box-archive text-primary"></span>
                Treasure
              </h1>
            </Link>

            <button
              className={`navbar-toggler ${isNavbarOpen ? "collapsed" : ""}`}
              type="button"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
            >
              {isNavbarOpen ? (
                <span className="fas fa-solid fa-xmark" aria-hidden="true">
                  &times;
                </span>
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>

            <div
              className={`collapse navbar-collapse ${
                isNavbarOpen ? "show" : ""
              } bg-white`}
            >
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active me-3">
                  Home
                </Link>
                <Link to="/shop" className="nav-item nav-link me-3">
                  Bridal
                </Link>
                <Link to="/shop" className="nav-item nav-link me-3">
                  Exclusive
                </Link>
                <Link to="/shop" className="nav-item nav-link me-3">
                  Collections
                </Link>
                <Link to="#" className="nav-item nav-link me-3">
                  About
                </Link>
                <Link to="/cart" className="nav-item nav-link me-3">
                  <i className="fa fa-shopping-bag fa-sm me-1"></i>
                  <span className="d-none d-md-inline"></span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
