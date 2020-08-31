import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import netflixLogo from '../../logo/netflix.png'

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={` nav ${show && "nav_black"}`}>
      <Link to="/">
        <img
          src={netflixLogo}
          className="nav_logo"
          alt="Netflix"
        />
      </Link>
      <Link to="/">
      <img
        src="https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png"
        className="nav_avatar"
        alt="Netflix"
      />
      </Link>
    </div>
  );
};

export default Navbar;
