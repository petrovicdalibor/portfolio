import { useState } from "react";
import { Link } from "gatsby";
import React from "react";
import gsap from "gsap/gsap-core";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function menuToggle() {
    const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

    if (toggleMenu === true) {
      setToggleMenu(false);
      hamburgerMenu.classList.remove("hamburger-menu-close");
      const navTl = gsap
        .timeline()
        .fromTo(
          "nav ul li",
          { x: 0, opacity: 1 },
          { x: 20, opacity: 0, duration: 1 }
        )
        .set("nav ul", { display: "none", opacity: 0, duration: 1 });
    } else if (toggleMenu === false) {
      setToggleMenu(true);
      hamburgerMenu.classList.add("hamburger-menu-close");
      const navTl = gsap
        .timeline()
        .set("nav ul", { display: "flex", opacity: 1, duration: 1 })
        .fromTo(
          "nav ul li",
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 }
        );
    }
  }
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">PETROVIC.</Link>
          </div>

          <nav>
            <div className="navLeft">
              <ul>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="navRight">
              <div className="hamburger-menu" onClick={menuToggle}>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
