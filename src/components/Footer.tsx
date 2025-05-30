import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-dark dark:text-light bg-light dark:bg-dark border-t-2 border-dark dark:border-light font-medium text-base md:text-lg">
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <Link
            href="https://mail.google.com/mail/?view=cm&to=badrmoo122@gmail.com"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Badr Mohamed
          </Link>
        </div>
        <Link
          href="https://mail.google.com/mail/?view=cm&to=badrmoo122@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
