import React from "react";
import "./AboutPage.css";
function AboutPage() {
  return (
    <>
      <div className="About-page-intro" id="about-page">
        <div className="About-page-right">
          <div className="About-page-img-stack">
            <img
              src="https://themewagon.github.io/satner/img/about-us.png"
              alt=""
              width="450px"
              height="450px"
              className="About-page-img"
            />
          </div>
        </div>
        <div className="About-page-left">
          <h2>About us</h2>

          <p>
            To gain attention from otherwise distracted customers, you need to
            tell a story about your brand. You need to practically communicate
            to make sure people see you, hear you, and understand exactly why
            they must simply engage with your products.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            delectus fugit facere recusandae architecto aliquam consequuntur
            libero dolorum magnam dolores.
          </p>
          <a href="#footer">
            {" "}
        <a href="#footer">   <button className="common-btn">contact</button></a> 
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
