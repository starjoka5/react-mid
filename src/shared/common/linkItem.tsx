import { ReactNode } from "react";
import { Link } from "wouter";

type Props = {
  link: string;
  children: ReactNode;
};
export const LinkItem = ({ link, children }: Props) => {
  return <Link className="text-white px-12 font-bold hover:bg-indigo-500 transition-all duration-500 w-full py-2" href={link}>{children}</Link>;
};
