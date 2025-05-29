import { motion, useScroll } from "framer-motion";
import { RefObject } from "react";

interface ILiIcon {
  reference: RefObject<HTMLLIElement | null>;
}
const LiIcon = ({ reference }: ILiIcon) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg
        className="-rotate-90 lg:w-[75px] lg:h-[75px] md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary dark:fill-primaryDark animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
