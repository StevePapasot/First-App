import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
