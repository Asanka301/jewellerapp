import React, { useState } from "react";
import { products } from "../data/Data";
import { Link } from "react-router-dom";

export default function Products() {
  // State for storing menu items
  const [menuItems, setMenuItem] = useState(products);

  // Function to filter items based on category
  const filterItems = (category) => {
    // Filter the products array based on the selected category
    const newItems = products.filter((item) => item.category === category);
    // Update the state with the filtered items
    setMenuItem(newItems);

    // If no category selected or 'all' category selected, show all items
    if (!category || category === "all") {
      setMenuItem(products);
      return;
    }
  };

  // Handler for showing all items
  const handleShowAllItems = () => {
    filterItems(); // Call filterItems without a category to show all items
  };

  return (
    <>
      {/* Container for the product section */}
      <div className="container-fluid fruite py-0">
        <div className="container py-2">
          <div className="text-center">
            <div className="row g-4">
              {/* Featured Products header */}
              <div className="col-lg-4 text-start">
                <h2>Featured Products</h2>
              </div>
              {/* Filter options */}
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  {/* Filter options for different categories */}
                  <li className="nav-item">
                    <Link
                      className="m-2 py-2 bg-light active"
                      onClick={handleShowAllItems}
                    >
                      <h4 style={{ width: "80px" }}>All</h4>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="py-2 m-2 bg-light"
                      onClick={() => filterItems("New")}
                    >
                      <h4 style={{ width: "100px" }}>New</h4>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="m-2 py-2 bg-light"
                      onClick={() => filterItems("Necklaces")}
                    >
                      <h4 style={{ width: "130px" }}>Necklaces</h4>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="m-2 py-2 bg-light"
                      onClick={() => filterItems("Bracelets")}
                    >
                      <h4 style={{ width: "130px" }}>Bracelets</h4>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="m-2 py-2 bg-light"
                      onClick={() => filterItems("Ear studs")}
                    >
                      <h4 style={{ width: "130px" }}>Ear Studs</h4>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* Product items */}
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* Render each product item */}
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

                            <div className="p-2 border-secondary border-top-4 rounded-bottom">
                              {/* Product name */}
                              <h6>{val.product_name}</h6>
                              {/* Product price */}
                              <div className="p-2 border-secondary border-top-4 rounded-bottom">
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
