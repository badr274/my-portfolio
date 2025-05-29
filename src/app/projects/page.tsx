import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Badr Mohamed",
  description:
    "Explore Badr Mohamed's portfolio of web development projects built using React.js, Next.js, and modern frontend tools.",
};

const ProjectsPage = () => {
  return (
    <main className="container mx-auto w-full py-16 sm:py-24 flex flex-col items-center justify-center">
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="mb-16 w-full"
      />

      <div className="grid grid-cols-12  gap-x-0 sm:gap-x-8 md:gap-x-16 gap-y-16 md:gap-24 xl:gap-y-32">
        <div className="col-span-12">
          <FeaturedProjects
            title="NyroAI Platform"
            img="/images/projects/ai-saas.png"
            summary="A modern AI-powered SaaS web application built with React, Next.js, and TypeScript. The platform offers a sleek and responsive user interface designed with Tailwind CSS, and leverages Next.js."
            link="https://ai-saas-seven-blue.vercel.app/"
            github="https://github.com/badr274/ai-saas"
            type="AI SAAS Platform"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Project
            title="Ellamart Ecommerce"
            img="/images/projects/ecommerce-vue.png"
            link="https://ecommerce-vue-chi.vercel.app/"
            github="https://github.com/badr274/ecommerce-vue"
            type="Ecommerce Website"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Project
            title="React Travel App"
            img="/images/projects/travel.png"
            link="https://travel-app-six-jade.vercel.app/"
            github="https://github.com/badr274/Travel-app"
            type="Travel App"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProjects
            title="MUI Dashboard"
            img="/images/projects/dashboard.png"
            summary="A fully-featured admin dashboard built with React.js and styled using Material UI. The dashboard integrates interactive and visually rich data visualizations using the Nivo charting library."
            link="https://react-dashboard-5hun.vercel.app/"
            github="https://github.com/badr274/react-dashboard"
            type="Website"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Project
            title="Restaurant Menu"
            img="/images/projects/menu.png"
            link="https://restaurant-menu-lemon.vercel.app/"
            github="https://github.com/badr274/restaurant-menu"
            type="Service"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Project
            title="TRIX Media Website"
            img="/images/projects/trix.png"
            link="https://trix-media.vercel.app/"
            github="https://github.com/badr274/trix-media"
            type="Media Service"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProjects
            title="Plant Website"
            img="/images/projects/plant-website.png"
            summary="A beautifully designed and fully responsive landing page for a plant-themed website built using HTML, Tailwind CSS, and JavaScript. The project blends clean UI design with modern animation libraries for an engaging experience."
            link="https://plant-website-psi-fawn.vercel.app/"
            github="https://github.com/badr274/plant-website"
            type="Website"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Project
            title="React Travel Website"
            img="/images/projects/travel.png"
            link="https://travel-app-six-jade.vercel.app/"
            github="https://github.com/badr274/Travel-app"
            type="Website"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Project
            title="VS Clone"
            img="/images/projects/vs-clone.png"
            link="https://vs-clone-fawn.vercel.app/"
            github="https://github.com/badr274/VS-Clone"
            type="Service"
          />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

interface IProject {
  type: string;
  title: string;
  summary?: string;
  img: string;
  link: string;
  github: string;
}

const FeaturedProjects = ({
  github,
  img,
  link,
  summary,
  title,
  type,
}: IProject) => {
  return (
    <article
      className="w-full relative flex lg:items-center flex-col lg:flex-row justify-between
    rounded-3xl border border-dark bg-light shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 gap-y-3 lg:gap-y-0  rounded-br-2xl"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-2xl rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={700}
          height={500}
          className="w-full h-full"
        />
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-y-1.5 sm:gap-y-2 pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-base sm:text-lg md:text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline text-dark text-dark underline-offset-2"
        >
          <h2 className=" w-full text-left text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            {title}
          </h2>
        </Link>

        <p className=" font-medium text-sm sm:text-base text-dark">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-8 sm:w-10">
            <GithubIcon className="text-dark" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light py-2 px-5 sm:px-6 text-base sm:text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ github, img, link, title, type }: IProject) => {
  return (
    <article className="w-full relative flex flex-col gap-y-2 sm:gap-y-4 items-center justify-center rounded-2xl border border-dark bg-light p-4 sm:p-6">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-2xl rounded-[2rem] bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={700}
          height={500}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col sm:gap-y-1.5 gap-y-2 items-start justify-between">
        <span className="text-primary dark:text-primaryDark font-medium text-base sm:text-lg md:text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline text-dark underline-offset-2"
        >
          <h2 className=" w-full text-left text-2xl sm:text-3xl  font-bold text-dark">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-base sm:text-lg font-semibold underline text-dark"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon className="text-dark" />
          </Link>
        </div>
      </div>
    </article>
  );
};
