import React from "react";

export function MenuBtn({ content, link = "#" }) {
  return (
    <a href={link} data-scroll-to-href>
      <div className="menu-item bg-white text-black w-[180px] rounded-[25px] relative text-center p-4 group hover:cursor-pointer">
        <span
          className={`animate-gradient rounded-[20px] toggle-btn w-[68px] h-11 block absolute left-1.5 top-1.5 group-hover:left-[106px] transition-all duration-150 ease-in-out z-10`}
        ></span>
        <span className="block translate-x-6 group-hover:translate-x-[-1.5rem] transition-all duration-150 ease-in-out	">
          {content}
        </span>
      </div>
    </a>
  );
}
