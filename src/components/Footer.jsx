import React from "react";
import "./FooterStyle.css";
// import { BiLogoFacebook } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiOutlineTwitter,
  AiTwotonePhone,
  AiOutlineMail,
} from "react-icons/ai";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>
                {" "}
                To gain attention from otherwise distracted customers, you need
                to tell a story about your brand. You need to practically
                communicate to make sure people see you, hear you{" "}
              </p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <i>
                  <AiTwotonePhone />
                </i>{" "}
                <span>+91-77409350250</span>
              </div>
              <div className="email">
                <a href="/">
                  <i>
                    <AiOutlineMail />
                  </i>
                  urbantrendz@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Categories</div>
            <div>
              <a href="#">Women T-shirts</a>
            </div>
            <div>
              <a href="#">Women Shirts</a>
            </div>
            <div>
              <a href="#">Mens T-shirts</a>
            </div>
            <div>
              <a href="#">Men Shirts</a>
            </div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name="" value="Send" />
              <div className="media-icons">
                <a href="https://www.instagram.com/bandhej_hub/">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="https://www.facebook.com/bandhejhub14/">
                  <i>
                    <AiOutlineInstagram />
                  </i>
                </a>
                <a href="https://www.youtube.com/channel/UCXArGaNnUU_bJGYZJb-WlAA">
                  <i>
                    <AiFillYoutube />
                  </i>
                </a>
                <a href="https://wa.me/7740930250">
                  <i>
                    <AiOutlineWhatsApp />
                  </i>
                </a>
                <a href="">
                  <i>
                    <AiOutlineTwitter />
                  </i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <p id="cright">Copyright © 2023 All rights reserved | Urban Trendz</p>
      </footer>
    </>
  );
}

export default Footer;
