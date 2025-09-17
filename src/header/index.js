import React, { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {

  const [isActive, setActive] = useState("false");
  const location = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // stay on home
    }
  };


  return (
    <>
      <header className="fixed-top site__header">
        <div className="navbar d-flex align-items-center justify-content-between">
          <Link 
            className="navbar-brand nav_ac" 
            to="/"
            onClick={handleLogoClick}
          >
          {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/projects" className="my-3"> Projects</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center w-100 p-3">
        <div className="d-flex"></div>
        <p className="copyright m-0">copyright - {logotext}</p>
      </div>
    </>
  );
};

export default Headermain;
