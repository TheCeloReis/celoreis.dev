import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const SocialBar = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.instagram.com/theceloreis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram>
            <span className="sr-only">Instagram</span>
          </BsInstagram>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/theceloreis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin>
            <span className="sr-only">LinkedIn</span>
          </BsLinkedin>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/theceloreis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub>
            <span className="sr-only">GitHub</span>
          </BsGithub>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/theceloreis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter>
            <span className="sr-only">Twitter</span>
          </BsTwitter>
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
