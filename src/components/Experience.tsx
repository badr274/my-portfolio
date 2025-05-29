"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

interface IWorkDetails {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: IWorkDetails) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-sm sm:text-base text-dark/75 dark:text-dark/50">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm sm:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32 md:my-64 text-dark">
      <AnimatedText
        text="Experience"
        className="lg:mb-32 mb-16 w-full text-center"
      />

      <div ref={ref} className="lg:w-[75%] md:w-[90%] w-full mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-[20px]  md:left-[30px] lg:left-9 top-0 w-[2px] md:w-[4px] h-full origin-top bg-dark dark:bg-primaryDark shadow-2xl"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
// Software Engineer @Google
// 2022-Present | Mountain View, CA
//  Worked on a team responsible for developing new features for Google's
//  search engine, including improving the accuracy and relevance of search results and
//  developing new tools for data analysis and visualization.

// Intern @Facebook
// Summer 2021 | Menlo Park, CA.
// Worked on a team responsible for developing a new mobile app feature that allowed users to create and
// share short-form video content, including designing and implementing a new user interface and developing
// the backend infrastructure to support the feature.

// Software Developer @Amazon
// 2020-2021 | Seattle, WA.
// Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
// as product recommendations and user reviews, and optimizing the app's performance and reliability.

// Software Developer Intern @Microsoft
// Summer 2019 | Redmond, WA.
// Worked on a team responsible for developing new features for Microsoft's Windows operating system,
// including implementing a new user interface for a system settings panel and optimizing the performance of
// a core system component.
