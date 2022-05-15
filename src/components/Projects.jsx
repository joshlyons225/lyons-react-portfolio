// import files and dependencies
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Horrorscope from "../assets/horrorscopes.png";
import OOPTracker from "../assets/ooptracker.png";
import Yodad from "../assets/yodad.png";
import Quiz from "../assets/quiz.png";
import Up2Bar from "../assets/up2bar.jpg";

// create Projects section function
const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full h-screen text-stone-600 bg-slate-800"
    >
      <figure className="flex flex-col md:flex bg-indigo-300 rounded-xl p-8 md:p-0">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-purple-900">
              Projects
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={2000}
            centerMode={true}
            onSwipeMove={true}
          >
            <div>
              <img
                className="object-cover h-48 w-auto"
                src={Horrorscope}
                alt="horrorscope icon"
              ></img>
            </div>
            <div>
              <img
                className="object-cover h-48 w-auto"
                src={OOPTracker}
                alt="ooptracker icon"
              ></img>
            </div>
            <div>
              <img
                className="object-cover h-48 w-auto"
                src={Yodad}
                alt="yodad icon"
              ></img>
            </div>
            <div>
              <img
                className="object-cover h-48 w-auto"
                src={Quiz}
                alt="quiz icon"
              ></img>
            </div>
            <div>
              <img
                className="object-cover h-48 w-auto"
                src={Up2Bar}
                alt="up2bar icon"
              ></img>
            </div>
          </Carousel>
        </div>
      </figure>
    </section>
  );
};

// export Projects section function
export default Projects;
