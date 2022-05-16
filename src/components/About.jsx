// import files and dependencies
import React from "react";
import Profile from "../assets/profile.jpg";
import { IoDocumentAttachSharp } from "react-icons/io5";
import Resume from "../assets/Josh_Lyons_-_Full_Stack_Developer.pdf";

// create About section function
const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen text-stone-600 bg-slate-800"
    >
      <figure className="flex flex-col md:flex bg-indigo-300 rounded-xl p-8 md:p-0">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-purple-900">
              About
            </p>
          </div>
        </div>

        <div className="md:flex w-full grid sm:grid-cols-2 gap-10 px-4 py-4">
          <img
            className="w-48 h-52 rounded-lg mx-auto"
            src={Profile}
            alt="Profile img"
          ></img>
          <div className="sm:text-right">
            <p className="font-bold text-4xl">
              Hello! My name is Josh Lyons; I'm a combat veteran who served in
              Iraq, Afghanistan, and Africa and also a sous chef with stages in
              Marseille and Nashville. I have truly found my passion in web
              design, and hold a particular interest in MERN stack development.
            </p>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aea3b0] py-4">
              <a
                className="flex justify-between items-center w-full"
                src={Resume}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <IoDocumentAttachSharp size={50} color={"#134e4a"} />
                <p>Click for resume</p>
              </a>
            </li>
          </div>
        </div>
      </figure>
    </section>
  );
};

// export About section function
export default About;
