import React, { useState, useEffect } from "react";
import "./NavbarStyle.css";
// react icons
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150
        ? setStickyClass("sticky-nav-come")
        : setStickyClass("");
    }
  };

  const [clickMenu, setClickMenu] = useState(false);
  const ClickMenuIcons = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <>
      <section className={`top-navbar ${stickyClass}`} id="navbar">
        <h2 className="navbarname">
          <a href="#navbar">UrabanTrendz</a>
        </h2>

        <div className="main-navbar">
          <ul className={clickMenu ? "nav-banner active" : "nav-banner"}>
            <li>
              <a className="active" href="#navbar">
                Home
              </a>
            </li>
            <li>
              <a href="#products">Shop</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#about-page">About</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav-icons">
          <i>
            <BiSearchAlt2 />
          </i>

          <i>
            <AiOutlineShoppingCart />
          </i>
          <i>
            <AiOutlineHeart />
          </i>

          <i className="nav-menu-icon" onClick={ClickMenuIcons}>
            {clickMenu ? <GrClose /> : <CiMenuFries />}
          </i>
        </div>
      </section>
    </>
  );
}

export default Navbar;
