import React from "react";
import "./OrderNowStyle.css";
function OrderNow() {
  return (
    <>
      <section className="order-click">
        <div className="order-click-right">
          <div className="order-click-img-stack">
            <img
              src="https://themewagon.github.io/cozastore/images/product-13.jpg"
              alt=""
              width="280px"
            />
          </div>
        </div>
        <div className="order-click-left">
          <p>Home / T-Shirt</p>
          <h1>Red Printed T-shirt by Hrx</h1>
          <h4>$495</h4>

          <select>
            <option>Quantity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            nesciunt? Quisquam velit unde veritatis quis cupiditate, illo
            aspernatur eligendi dolore!lorem1-0 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Qui, itaque?
          </p>
        </div>
      </section>
    </>
  );
}

export default OrderNow;
