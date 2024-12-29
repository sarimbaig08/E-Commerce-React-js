import React, { useState } from "react";
import "./Navbar.css"; // Make sure to create a Navbar.css file for the styles
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Shopper</span>
      </div>
      <div className="navbar-center">
        <a
          href="#"
          className="nav-item"
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to="/" className="nav-link">
            Shop
          </Link>

          {menu == "Shop" ? <hr /> : <></>}
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/Men" className="nav-link">
            Men
          </Link>

          {menu == "Men" ? <hr /> : <></>}
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/Women" className="nav-link">
            Women
          </Link>

          {menu == "Women" ? <hr /> : <></>}
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/Kids" className="nav-link">
            Kids
          </Link>

          {menu == "Kids" ? <hr /> : <></>}
        </a>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-link">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/cart" className="nav-link">
          <div className="cart">
            <svg
              className="cart-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <div className="cart-count">0</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
