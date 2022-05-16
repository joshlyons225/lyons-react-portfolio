// import files and dependencies
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// placeholder for resume; import Resume from "../assets"
import LogoJL from "../assets/logo.png";

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section name="navbar" className="fixed w-full h-auto">
      <div className="w-full h-auto text-stone-600 bg-slate-800 flex p-4">
        {/* Nav burger */}
        <div onClick={clickHandler} className="hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "invisible"
              : "absolute top-0 left-0 w-full h-screen flex flex-col"
          }
        >
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={clickHandler}
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={clickHandler}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={clickHandler}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={clickHandler}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div>
          <img
            src={LogoJL}
            alt="logo icon"
            style={{ width: "300px", height: "200px" }}
          ></img>
        </div>
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
