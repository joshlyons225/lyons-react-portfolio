// import files and dependencies
import React from "react";
import Profile from "../assets/profile.JPEG";

// create About section function
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-indigo-600 bg-emerald-400"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-900">
              About
            </p>
          </div>
        </div>

        <div className="md:flex w-full grid sm:grid-cols-2 gap-10 px-4">
          <img
            class="w-48 h-48 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Profile}
            alt="Profile img"
            width="512"
            height="784"
          ></img>
          <div className="sm:text-right">
            <p className="font-bold text-4xl">
              Hello! My name is Josh Lyons; I'm a full stack developer.
            </p>
          </div>
          <div className="font-medium">
            <p className="font-bold text-4xl">
              Bullet
              <br>list</br>
              <br>here</br>
              <br>of</br>
              <br>shit</br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export About section function
export default About;
