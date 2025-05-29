"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

interface IWorkDetails {
  type: string;
  place: string;
  time: string;
  info: string;
}

const Details = ({ type, time, info, place }: IWorkDetails) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold lg:text-2xl sm:text-xl text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-sm sm:text-base text-dark/75 dark:text-dark/50">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-sm sm:text-base">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 text-dark">
      <AnimatedText
        text="Education"
        className="lg:mb-32 mb-16 w-full text-center"
      />
      <div ref={ref} className="lg:w-[75%] md:w-[90%] w-full mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-[20px]  md:left-[30px] lg:left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top "
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Software Engineer"
            time="2022-Present"
            place="Mountain View, CA"
            info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            type="Software Engineer"
            time="2022-Present"
            place="Mountain View, CA"
            info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            type="Software Engineer"
            time="2022-Present"
            place="Mountain View, CA"
            info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
