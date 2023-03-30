import React from "react";

const Footer = () => {
  return (
    <div className="h-16 w-full">
      <div className="absolute bottom-0 left-0 w-full h-12 bg-zinc-900 text-white text-center text-xs flex justify-center items-center flex-col">
        <p>
          Made with <span className="text-red-500">❤</span> by Me
        </p>

        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
