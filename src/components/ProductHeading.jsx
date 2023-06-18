import React from "react";
import "./ProductHeadingStyle.css";
import { BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
function ProductHeading() {
  return (
    <>
      <div className="product-heading-panel" id="products">
        <div className="product-heading-panel-heading">
          <h2>product overview</h2>
        </div>

        <div className="product-heading-panel-navbar">
          <div className="product-heading-panel-nav">
            <ul>
              <li>
                <a href="/" className="active">
                  All Products
                </a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">Kids</a>
              </li>
            </ul>
          </div>
          <div className="product-heading-panel-buttons">
            <button>
              {" "}
              <BsFilter />
              &nbsp;Filter
            </button>
            <button>
              {" "}
              <AiOutlineSearch />
              &nbsp;Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHeading;
