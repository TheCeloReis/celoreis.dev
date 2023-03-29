import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

const Links = () => {
  return (
    // place the div in the middle of the page
    <div className="grid place-items-center h-screen text-white">
      <ul className="w-full max-w-md space-y-6 p-4">
        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3 hover:bg-zinc-700 transition-all hover:scale-105"
            href="https://www.linkedin.com/in/TheCeloReis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
            <span className="w-full text-center text-lg">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3 hover:bg-zinc-700 transition-all hover:scale-105"
            href="https://github.com/TheCeloReis/celoreis.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
            <span className="w-full text-center text-lg">Github</span>
          </a>
        </li>
        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3 hover:bg-zinc-700 transition-all hover:scale-105"
            href="https://www.instagram.com/TheCeloReis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
            <span className="w-full text-center text-lg">Instagram</span>
          </a>
        </li>

        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3 hover:bg-zinc-700 transition-all hover:scale-105"
            href="https://docs.google.com/presentation/d/1fXfdQgX26tG-kGYFSb2i2CFf_iwDyk-4_QPPzS9xEqM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlinePresentationChartLine size={32} />
            <span className="w-full text-center text-lg">
              Vandalizando a WEB (Slides)
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
