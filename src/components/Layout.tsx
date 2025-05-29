import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
const Layout = ({ children, className }: IProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
