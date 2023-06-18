import React from "react";
import "./ServicesStyle.css";

function Service() {
  return (
    <>
      <div className="service" id="service">
        <h2>Services Offer</h2>
        <p>
          Is give may shall likeness made yielding spirit a itself togeth
          created after sea
        </p>
        <div className="service-item">
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s1.png"
              alt=""
            />
            <div className="service-detail">
              <h3>Free Shipping</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                libero fugiat eaque!
              </p>
            </div>
          </div>
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s2.png"
              alt=""
            />
            <div className="service-detail">
              <h3>Best Discount</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                libero fugiat eaque!
              </p>
            </div>
          </div>
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s3.png"
              alt=""
            />
            <div className="service-detail">
              <h3>Product Satisfacetion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                libero fugiat eaque!
              </p>
            </div>
          </div>
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s4.png"
              alt=""
            />
            <div className="service-detail">
              <h3>Available 24x7</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                libero fugiat eaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
