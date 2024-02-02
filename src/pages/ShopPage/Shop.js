import React, { useState } from "react";
import { products } from "../../data/Data";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Shop() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleAddToCart = (product) => {
  //   let totalPrice = qty * product.price;
  //   const tempProduct = {
  //     ...product,
  //     qunatity: qty,
  //     totalPrice,
  //   };
  //   dispatch(addToCart(tempProduct));
  //   // navigate("/cart");
  // };

  const [menuItems, setMenuItem] = useState(products);
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const totalItemCount = products.length;

  const handleRangeChange = (event, category) => {
    const value = event.target.value;
    setRangeValue(value);
    filterItems("all", value); // Assuming FilterItems is in the same component scope
  };

  const filterItems = (category, price, id) => {
    let newItems;

    if (category === "all") {
      newItems = products;
    } else {
      newItems = products.filter((item) => item.category === category);
    }

    if (price !== undefined) {
      newItems = newItems.filter((item) => item.price <= price);
    }
    if (price === "2000") {
      newItems = products;
    }

    setMenuItem(newItems);
  };

  const getCategoryItemCount = (category) => {
    return menuItems.filter((item) => item.category === category).length;
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
    filterItems(category, rangeValue);
  };
  return (
    <>
      <div className="container-fluid fruite py-0">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-12 mt-0  ">
              <div className="row g-4 mt-4">
                <div className="col-xl-6"></div>
                <div className="row g-4 mt-4">
                  <div className="col-xl-3 d-flex justify-content-start align-items-center">
                    <h3>Filters</h3>
                  </div>
                  <div className="col-xl-6"></div>
                  <div className="col-xl-3 d-none d-xl-flex justify-content-end align-items-center">
                    <h3>{totalItemCount} item(s)</h3>
                  </div>
                </div>
              </div>

              <hr className="my-4 mb-4 mt-2" />
              {/* ---- Filter by Karatage----- */}

              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h3>Karatage</h3>
                        <ul className="list-unstyled fruite-categories">
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between align-items-center fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="allCheckbox"
                              >
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  id="allCheckbox"
                                  value="all"
                                  checked={selectedCategory === "all"}
                                  onChange={() => handleCheckboxChange("all")}
                                />
                                22k
                              </label>
                            </div>
                          </li>
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="braceletsCheckbox"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="braceletsCheckbox"
                                  value="Bracelets"
                                  checked={selectedCategory === "Bracelets"}
                                  onChange={() =>
                                    handleCheckboxChange("Bracelets")
                                  }
                                />
                                20k
                              </label>
                            </div>
                          </li>
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="necklacesCheckbox"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="necklacesCheckbox"
                                  value="Necklaces"
                                  checked={selectedCategory === "Necklaces"}
                                  onChange={() =>
                                    handleCheckboxChange("Necklaces")
                                  }
                                />
                                18k
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ---- Filter by Metal----- */}

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h3>Metal</h3>
                        <ul className="list-unstyled fruite-categories">
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="necklacesCheckbox"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="necklacesCheckbox"
                                  value="Necklaces"
                                  checked={selectedCategory === "Chain"}
                                  onChange={() => handleCheckboxChange("Chain")}
                                />
                                Rose Gold
                              </label>
                            </div>
                          </li>
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="newCheckbox"
                              >
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  id="newCheckbox"
                                  value="New"
                                  checked={selectedCategory === "Ear studs"}
                                  onChange={() =>
                                    handleCheckboxChange("Ear studs")
                                  }
                                />
                                White Gold
                              </label>
                            </div>
                          </li>
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="newCheckbox"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="newCheckbox"
                                  value="New"
                                  checked={selectedCategory === "New"}
                                  onChange={() => handleCheckboxChange("New")}
                                />
                                Yellow Gold
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ---- Filter by price----- */}

                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-xl-12">
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min="100"
                            max="1000"
                            value={rangeValue}
                            onChange={handleRangeChange}
                          />
                          <output id="amount " name="amount">
                            100 LKR - {rangeValue} LKR
                          </output>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  {menuItems.length === 0 ? (
                    <div className="container text-center">
                      <h1 className="text-primary display-6 mb-4">
                        <span className="fa-solid fa-box-archive text-primary"></span>
                        No Jewelry to display
                      </h1>
                      <h5>
                        Right now, we don’t have Jewelry for this filters, But
                      </h5>
                      <h5>we’ll full-fill your need soon!</h5>
                    </div>
                  ) : (
                    <div className="row g-2">
                      {menuItems.map((val, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={val.product_img}
                                style={{ width: "500px", height: "300px" }} // Adjust width as needed
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
