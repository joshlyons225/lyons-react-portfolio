import React from "react";
import { GiFallingBomb, GiSpaceSuit } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="w-full h-auto flex justify-center bg-slate-800">
      <h1 className="text-stone-600 text-center inline-flex py-2">
        <GiFallingBomb size={30} color="stone-600" /> Made with pride by
        <a href="https://github.com/joshlyons225">Josh Lyons</a>
        <br></br>
        &copy; 2022 Top Shelf Productions
        <GiSpaceSuit size={30} color="stone-600" />
      </h1>
    </footer>
  );
};

// export Footer element
export default Footer;
