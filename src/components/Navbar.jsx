// import files and dependencies
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// placeholder for resume; import Resume from "../assets"

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section
      name="navbar"
      className="fixed w-full h-screen flex bg-slate-600 text-stone-600"
    >
      <div className="w-full h-screen text-stone-600 bg-slate-800">
        {/* Nav burger */}
        <div onClick={clickHandler} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
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
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
