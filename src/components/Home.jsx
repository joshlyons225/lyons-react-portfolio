// import files and dependencies
import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

// create Home section function
const Home = () => {
  return (
    <div name="home" className="w-full h-screen text-indigo-600 bg-emerald-400">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hey there! my name is</p>
        <h1 className="text-4xl sm:text-7x1 font-bold">Josh Lyons</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          I'm a Full Stack Developer.
        </h2>
      </div>
    </div>
  );
};

// export Home section function
export default Home;
