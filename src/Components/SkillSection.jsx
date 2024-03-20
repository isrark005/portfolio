import React from "react";
import { motion, easeInOut } from "framer-motion";
import {
  html,
  css,
  bootstrap,
  react,
  tailwind,
  js,
  wordpress,
  leftHand,
  rightHand,
  skillBg,
} from "../assets/imgIndex";

export function SkillSection() {
  return (
    <section className="skill-section h-[700px] z-0 max-md:h-auto ">
      <div className="skill-section-inner container-custom relative h-full grid content-center ">
        <img
          src={skillBg}
          alt=""
          className="background-image absolute animate-spin"
        />

        <motion.img
          initial={{ transformOrigin: "bottom right" }}
          animate={{ translateX: ["0px", "20px", "0px"], rotate: [0, 10, 0] }}
          transition={{
            duration: 10,
            ease: easeInOut,
            repeat: Infinity,
          }}
          src={rightHand}
          alt=""
          className="hand absolute top-0 -right-52 -rotate-12 z-[11]"
        />
        <motion.img
          initial={{ transformOrigin: "bottom left" }}
          animate={{ translateY: ["0px", "50px", "0px"], rotate: [0, -10, 0] }}
          transition={{
            duration: 10,
            delay: 1,
            ease: easeInOut,
            repeat: Infinity,
          }}
          src={leftHand}
          alt=""
          className="hand absolute -bottom-40 -left-52 rotate-[24deg] z-[11]"
        />

        <div className="skills flex flex-nowrap gap-8 justify-center z-10 max-md:flex-col max-md:items-center">
          <div className="skill grid content-center justify-center">
            <img src={html} alt="" />
          </div>
          <div className="skill grid content-center justify-center">
            <img src={css} alt="" />
          </div>
          <div className="skill grid content-center justify-center">
            <img src={js} alt="" />
          </div>
          <div className="skill grid content-center justify-center">
            <img src={tailwind} alt="" />
          </div>
          <div className="skill grid content-center justify-center">
            <img src={react} alt="" />
          </div>
          <div className="skill grid content-center justify-center">
            <img src={bootstrap} alt="" />
          </div>
          <div className="skill grid content-center justify-center">
            <img src={wordpress} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
