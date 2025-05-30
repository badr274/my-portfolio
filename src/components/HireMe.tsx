import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className=" md:fixed md:left-4 md:bottom-4 flex items-center justify-center overflow-hidden text-circular">
      <div className="w-24 md:w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow " />
        <Link
          href="https://mail.google.com/mail/?view=cm&to=badrmoo122@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-dark dark:border-light w-12 h-12 md:h-20 md:w-20 rounded-full font-semibold 
          hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light duration-150 text-[10px] md:text-base"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
