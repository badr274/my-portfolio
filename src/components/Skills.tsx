"use client";
import { motion } from "framer-motion";

interface ISkill {
  name: string;
  x: number | string;
  y: number | string;
}

const Skill = ({ name, x, y }: ISkill) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold text-light text-sm md:text-base sm:text-light bg-dark lg:py-3 lg:px-6 md:py-2 md:px-4 px-3 py-1.5 shadow-dark cursor-pointer absolute skill"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold xl:text-8xl lg:text-7xl text-6xl mt-32 md:mt-64 w-full text-center text-dark">
        Skills
      </h2>
      <div className="w-full xl:!h-[100vh] relative flex items-center justify-center rounded-full skills h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold  text-sm md:text-base text-light bg-dark p-3 sm:p-4 md:p-5 xl:p-8  shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="TypeScript" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="Redux TK" x="-20vw" y="-15vw" />
        <Skill name="HTML" x="15vw" y="-12vw" />
        <Skill name="Tailwind CSS" x="32vw" y="-5vw" />
        <Skill name="NextJs" x="0vw" y="-20vw" />
        <Skill name="Responsive Design" x="-25vw" y="18vw" />
        <Skill name="RESTFUL APIs" x="18vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
