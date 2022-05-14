// import files and dependencies
import React from "react";
import CSS from "../assets/css.png";
import GraphQL from "../assets/graphql.png";
import HTML from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import MySQL from "../assets/mysql.png";
import Node from "../assets/node.png";
import ReactIcon from "../assets/react.png";

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
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Javascript} alt="JS icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={MongoDB} alt="Mongo icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactIcon} alt="React icon" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GraphQL} alt="GraphQL icon" />
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

// export Skills section function
export default Skills;
