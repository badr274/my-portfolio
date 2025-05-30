"use client";
import { motion } from "framer-motion";

interface IProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AnimatedText = ({ className, text }: IProps) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize xl:text-8xl md:text-7xl sm:text-6xl text-4xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}`}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
