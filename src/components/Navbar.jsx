// import files and dependencies
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { Link } from "react-scroll";
// placeholder for resume; import Resume from "../assets"

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section className="fixed w-full h-[200px] flex justify-between items-center px-4 bg-slate-600 text-stone-600">
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};

// export Navbar section function
export default Navbar;
