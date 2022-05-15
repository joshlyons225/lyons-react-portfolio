// import files and dependencies
import React from "react";

// create Home section function
const Home = () => {
  return (
    <section
      name="home"
      className="w-full h-screen text-stone-600 bg-slate-800"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-7xl font-bold">Josh Lyons</h1>
        <h2 className="text-5xl font-bold">Full Stack Developer</h2>
      </div>
    </section>
  );
};

// export Home section function
export default Home;
