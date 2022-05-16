// import files and dependencies
import React from "react";

// create Home section function
const Home = () => {
  return (
    <section
      name="home"
      className="w-full h-auto text-stone-600 bg-slate-800 p-4"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center">
        <h1 className="text-7xl font-bold">Josh Lyons</h1>
        <h2 className="text-5xl font-bold">Full Stack Developer</h2>
      </div>
    </section>
  );
};

// export Home section function
export default Home;
