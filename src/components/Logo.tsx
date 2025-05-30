"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

const Logo = () => {
  return (
    <div className="flex  items-center justify-self-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-[#0b1946] dark:text-light dark:border dark:border-light text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#0b1946",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#0b1946",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        BM
      </MotionLink>
    </div>
  );
};

export default Logo;
