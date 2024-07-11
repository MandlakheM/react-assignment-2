import React from "react";
import "./nav.css";
import logo from "../assets/starbucks-log.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import { Bs1CircleFill } from "react-icons/bs";
function Nav() {
  return (
    <>
      <nav className="container">
        <div className="navContainer ">
          <div className="logoContainer">
            <div className="logoHeading">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="heading">
                <ul>
                  <a href="">
                    <li>COFFEE</li>
                  </a>
                  <a href="">
                    <li>TEA</li>
                  </a>
                  <a href="">
                    <li>MENU</li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="search">
              <input className="bottom" type="text" placeholder="SEARCH"/> <LiaSearchSolid id="icon"/>
            </div>
            <div className="basket">
              <div className="basketText">
              <Bs1CircleFill  id="one"/>
                <h4>MY BASKET</h4>
              </div>
              <div className="basketIcon">
                <a href="">
                  <RxHamburgerMenu id="icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
