import React from "react";

import "./HeaderStyle.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h2>Fashion sale</h2>
          <h1>Minimal Menz & Woman Style</h1>
          <p>
            Being perfectly well-dressed gives one a tranquillity that no
            religion can bestow.” – Ralph Waldo Emerson
          </p>

          <a href="/">
            {" "}
            <a href="#products">
              {" "}
              <button className="intro-btn common-btn">Shop now</button>
            </a>
          </a>
        </div>

        <div className="header-right">
          <div className="img-stack">
            <img
              src="https://themewagon.github.io/cozastore/images/product-05.jpg"
              alt=""
              width="450px"
              className="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
