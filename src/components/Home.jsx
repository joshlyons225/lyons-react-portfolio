// import files and dependencies
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

// create Home section function
const Home = () => {
  return (
    <section
      name="home"
      className="w-full h-screen text-stone-600 bg-slate-800"
    >
      <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-900 hover:border-purple-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-7xl font-bold">Josh Lyons</h1>
        <h2 className="text-5xl font-bold">Full Stack Developer</h2>
      </div>
    </section>
  );
};

// export Home section function
export default Home;
