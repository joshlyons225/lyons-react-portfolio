// import files and dependencies
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";

// create Contact section function
const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen text-stone-600 bg-slate-800"
    >
      <figure className="flex flex-col md:flex bg-indigo-300 rounded-xl p-8 md:p-0">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-purple-900">
              Contact
            </p>
          </div>
        </div>
        <div className="lg:flex fixed flex-row top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href=""
                target={"_blank"}
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/joshlyons225"
                target={"_blank"}
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aea3b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:joshlyons225@gmail.com"
              >
                <GiLetterBomb size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href=""
                target={"_blank"}
              >
                <GrDocumentText size={30} />
              </a>
            </li>
          </ul>
        </div>
      </figure>
    </section>
  );
};

// export Contact section function
export default Contact;
