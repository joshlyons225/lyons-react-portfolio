// import files and dependencies
import React from "react";
import Thought from "../assets/thought.png";

// create Skills section function
const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full h-screen text-stone-600 bg-slate-800"
    >
      <figure className="flex flex-col md:flex bg-indigo-300 rounded-xl p-8 md:p-0">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-purple-900">
              Skills
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-full grid sm:grid-cols-2 gap-10 px-4 py-4">
          <div className="sm:text-right">
            <p className="font-bold text-4xl">
              <ul>
                <li>* HTML, CSS, Git</li>
                <li>* JavaScript, Node, Express</li>
                <li>* MySQL, MongoDB, APIs</li>
                <li>* MVC, ORM, PWA</li>
                <li>* React, Bootstrap, Tailwind</li>
              </ul>
            </p>
          </div>
          <img
            className="w-auto h-48 rounded-lg mx-auto"
            src={Thought}
            alt="Thought img"
          ></img>
        </div>
      </figure>
    </section>
  );
};

// export Skills section function
export default Skills;
