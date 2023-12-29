import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <div className="wrap-menu-desktop" style={{ top: "40px" }}>
      <nav className="limiter-menu-desktop container">
        <div className="d-flex logo-links">
          <Link to={"/"} className="logo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
              alt="IMG-LOGO"
            />
          </Link>

          <div className="menu-desktop">
            <ul className="main-menu">
              <li>
                <Link to="product.html">Shop</Link>
              </li>
              <li className="label1" data-label1="hot">
                <Link to="shoping-cart.html">Features</Link>
              </li>
              <li>
                <Link to="blog.html">Blog</Link>
              </li>
              <li>
                <Link to="about.html">About</Link>
              </li>
              <li>
                <Link to="contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="wrap-icon-header flex-w flex-r-m">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
            data-notify="2"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <Link
            href="#"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
            data-notify="0"
          >
            <i class="fa-regular fa-heart"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
