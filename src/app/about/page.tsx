import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Badr Mohamed",
  description:
    "Learn more about Badr Mohamed — a frontend developer with a passion for crafting modern React and Next.js applications.",
};
const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center py-16 sm:py-24 justify-center">
      <div className="container mx-auto">
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="grid w-full grid-cols-8 gap-8 sm:gap-16 py-15 text-dark">
          <div className="xl:col-span-3 sm:col-span-4 sm:order-1 order-2 col-span-8 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m Badr Mohamed — a frontend developer specializing in
              React.js and Next.js. With 4 years of experience, I’m passionate
              about JavaScript and modern web technologies. I enjoy building
              fast, responsive, and user-friendly applications.
            </p>
            <p className="my-4 font-medium">
              JavaScript is not just my main tool — it’s my favorite language. I
              actively explore its ecosystem through frameworks like React and
              tools like TypeScript and Tailwind CSS.
            </p>
            <p className="font-medium">
              I care about clean code, performance, and creating intuitive,
              accessible interfaces. Whether it’s a simple landing page or a
              full web platform, I bring focus and user-centered thinking to
              every project.
            </p>
          </div>
          <div className="xl:col-span-3 sm:col-span-4 sm:order-2 order-1 col-span-8 relative xl:h-full h-fit rounded-2xl border-2 border-dark bg-light p-7">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
            <Image
              src={"/images/profile/my-photo.jpg"}
              alt="Badr Mohamed"
              width={400}
              height={600}
              priority
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="xl:col-span-2 col-span-8 flex order-3 mt-4 xl:mt-0 xl:flex-col items-end justify-evenly">
            {/* <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">50+</span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                staisfied clients
              </h2>
            </div> */}
            <div className="flex flex-col items-center xl:items-end justify-center">
              <span className="inline-block text-dark text-5xl sm:text-6xl md:text-7xl font-bold">
                <AnimatedNumber value={20} />+
              </span>
              <h2 className="text-lg xl:text-xl font-medium text-center capitalize text-dark/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-center sm:items-end justify-center">
              <span className="inline-block text-dark text-5xl sm:text-6xl md:text-7xl font-bold">
                <AnimatedNumber value={1} />+
              </span>
              <h2 className="text-lg sm:text-xl text-center font-medium capitalize text-dark/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default AboutPage;
