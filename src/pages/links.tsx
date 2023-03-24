import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Links = () => {
  return (
    // place the div in the middle of the page
    <div className="grid place-items-center h-screen">
      <ul className="w-full max-w-md space-y-6 p-4">
        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3"
            href="https://www.linkedin.com/in/TheCeloReis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
            <span className="w-full text-center">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3"
            href="https://github.com/TheCeloReis/celoreis.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
            <span className="w-full text-center">Github</span>
          </a>
        </li>
        <li>
          <a
            className="w-full inline-flex items-center rounded-lg bg-zinc-800 py-2 px-3"
            href="https://www.instagram.com/TheCeloReis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
            <span className="w-full text-center">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
