import React from "react";
import "./AllProductListStyle.css";
import productList from "./productsList";

function AllProductList() {
  return (
    <>
      <div className="all-product-list">
        <div className="all-product-item">
          <div className="all-product-image">
            <img src={productList[0].url} alt="" />
          </div>
          <div className="all-product-detail">
            <p>{productList[0].discription}</p>
            <p>{productList[0].price}</p>
          </div>
        </div>

        <div className="all-product-item">
          <div className="all-product-image">
            <img src={productList[1].url} alt="" />
          </div>
          <div className="all-product-detail">
            <p>{productList[1].discription}</p>
            <p>{productList[1].price}</p>
          </div>
        </div>

        <div className="all-product-item">
          <div className="all-product-image">
            <img src={productList[2].url} alt="" />
          </div>
          <div className="all-product-detail">
            <p>{productList[2].discription}</p>
            <p>{productList[2].price}</p>
          </div>
        </div>
        <div className="all-product-item">
          <div className="all-product-image">
            <img src={productList[3].url} alt="" />
          </div>
          <div className="all-product-detail">
            <p>{productList[3].discription}</p>
            <p>{productList[3].price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProductList;
