import React from "react";
import "./ProductPanelStyle.css";
function ProductPanel() {
  return (
    <>
      <div className="product-panel">
        <div className="product-panel-container">
          <div className="product-panel-container-detail">
            <h2>Mens</h2>
            <a href="/">
              {" "}
              <p>See Collections</p>
            </a>
          </div>

          <div>
            <img
              src="https://themewagon.github.io/cozastore/images/banner-02.jpg"
              alt=""
              width="280px"
              className="product-panel-container-img"
            />
          </div>
        </div>

        <div className="product-panel-container">
          <div className="product-panel-container-detail">
            <h2>Women</h2>
            <a href="/">
              {" "}
              <p>See Collections</p>
            </a>
          </div>

          <div>
            <img
              src="https://themewagon.github.io/cozastore/images/banner-01.jpg"
              alt=""
              width="280px"
              className="product-panel-container-img"
            />
          </div>
        </div>
        <div className="product-panel-container">
          <div className="product-panel-container-detail">
            <h2>Kids</h2>
            <a href="/">
              {" "}
              <p>See Collections</p>
            </a>
          </div>

          <div>
            <img
              src="https://th.bing.com/th/id/OIP.c3qGoX9_1JRa_cmEloTZAAHaE7?pid=ImgDet&rs=1"
              alt=""
              width="280px"
              className="product-panel-container-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPanel;
