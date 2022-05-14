// import files and dependencies
import React from "react";

// create Projects section function
const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full h-auto text-stone-600 bg-slate-800"
    >
      <figure className="flex flex-col md:flex bg-indigo-300 rounded-xl p-8 md:p-0">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-purple-900">
              Projects
            </p>
          </div>
        </div>
      </figure>
    </section>
  );
};

// export Projects section function
export default Projects;
