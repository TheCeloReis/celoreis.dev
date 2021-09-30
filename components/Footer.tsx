import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReddit,
  FaCodepen,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full text-white text-4xl absolute bottom-0 left-0">
      <ul className="m-auto max-w-xs flex justify-around">
        <li>
          <a
            href="https://github.com/TheCeloReis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1.5 hover:text-blue-500 transition-colors"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/theceloreis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1.5 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/TheCeloReis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1.5 hover:text-blue-500 transition-colors"
          >
            <FaTwitter />
          </a>
        </li>

        <li>
          <a
            href="https://www.reddit.com/user/TheCeloReis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1.5 hover:text-blue-500 transition-colors"
          >
            <FaReddit />
          </a>
        </li>

        <li>
          <a
            href="https://codepen.io/TheCeloReis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1.5 hover:text-blue-500 transition-colors"
          >
            <FaCodepen />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
