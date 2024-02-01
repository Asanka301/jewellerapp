import React, { useState } from "react";
import { products } from "../data/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const increaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      qunatity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    // navigate("/cart");
  };

  const [menuItems, setMenuItem] = useState(products);

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
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Featured Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light  active"
                      onClick={handleShowAllItems}
                    >
                      <h4 className="text-dark" style={{ width: "130px" }}>
                        All
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light "
                      onClick={() => filterItems("New")}
                    >
                      <h4 className="text-dark" style={{ width: "130px" }}>
                        New
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light "
                      onClick={() => filterItems("Necklaces")}
                    >
                      <h4 className="text-dark" style={{ width: "130px" }}>
                        Necklaces
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light"
                      onClick={() => filterItems("Bracelets")}
                    >
                      <h4 className="text-dark" style={{ width: "130px" }}>
                        Bracelets
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light "
                      onClick={() => filterItems("Ear studs")}
                    >
                      <h4 className="text-dark" style={{ width: "130px" }}>
                        Ear studs
                      </h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                                style={{ width: "500px", height: "200px" }} // Adjust width as needed
                                className="img-fluid rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: "10px", left: "10px" }}
                            >
                              {val.category}
                            </div>
                            <div className="p-2  border-secondary border-top-4  rounded-bottom">
                              <h5>{val.product_name}</h5>

                              <div className="p-2  border-secondary border-top-4  rounded-bottom">
                                <h4 className="text-dark fs-5   mb-2">
                                  RS. {val.price}
                                </h4>
                                {/* <button
                                  onClick={() => handleAddToCart(val)}
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                  Add to cart
                                </button> */}
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
