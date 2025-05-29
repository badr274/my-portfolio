import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
// import Layout from "@/components/Layout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badr Mohamed | Frontend Developer (React & Next.js)",
  description:
    "I'm Badr Mohamed, a frontend developer specialized in React.js and Next.js. I build responsive, fast, and modern web apps.",
};

const HomePage = () => {
  return (
    <main className="container mx-auto pb-25 text-dark flex flex-col gap-y-5 md:flex-row items-center justify-between lg:justify-around w-full pt-5">
      {/* <Layout> */}
      <div className="relative w-full md:w-1/3 lg:w-1/2 h-full">
        <Image
          src={`/images/profile/developer-image.png`}
          alt="Developer Image"
          width={580}
          height={580}
          priority
          className="max-h-[580px]  object-contain"
        />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 flex items-center md:items-start flex-col self-center">
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design."
          className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-5xl xl:!text-6xl 2xl:text-8xl !text-center md:!text-left"
        />
        <p className="my-4 text-xs sm:text-sm md:text-base font-medium">
          I&apos;m a passionate Frontend Developer with hands-on experience as a
          freelancer, focused on building modern, high-performance web
          applications using React.js and Next.js, with working knowledge of
          Vue.js. I write clean, scalable code, optimize performance, and
          integrate seamlessly with REST APIs.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/react_resume.pdf"
            target="_blank"
            className="flex items-center bg-dark text-light py-1.5 sm:py-2 md:py-2.5 px-4 sm:px-5 md:px-6 rounded-lg text-sm sm:text-base md:text-lg font-semibold  border border-transparent hover:border-dark hover:text-dark hover:bg-light duration-300"
            download={true}
          >
            Resume <LinkArrow className="w-4 sm:w-5 md:w-6 ml-1" />
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&to=badrmoo122@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base md:text-lg font-medium capitalize text-dark underline"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* </Layout> */}
      <HireMe />
      <div className="absolute right-8 bottom-8 hidden md:inline-block w-24">
        <Image
          src={`/images/svgs/miscellaneous_icons_1.svg`}
          alt="Badr"
          width={200}
          height={400}
          priority
          className="w-full h-auto"
        />
      </div>
    </main>
  );
};

export default HomePage;
