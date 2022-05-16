// import files and dependencies
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

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
        <div className="lg:flex fixed top-[35%] left-0">
          <ul className="flex flex-row justify-center">
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 py-4">
              <a
                className="flex justify-between items-center w-full"
                href="https://www.linkedin.com/in/josh-lyons-2a4ab923a/"
                target={"_blank"}
                rel={"noopener, noreferrer"}
              >
                <FaLinkedin size={50} color={"blue"} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] py-4">
              <a
                className="flex justify-between items-center w-full"
                href="https://github.com/joshlyons225"
                target={"_blank"}
                rel={"noopener, noreferrer"}
              >
                <FaGithub size={50} color={"black"} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aea3b0] py-4">
              <a
                className="flex justify-between items-center w-full"
                href="mailto:joshlyons225@gmail.com"
              >
                <RiMailSendLine size={50} color={"#047857"} />
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
