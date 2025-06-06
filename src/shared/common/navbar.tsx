import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Navbar = ({ children }: Props) => {
  return <nav className="flex fixed flex-col py-4 bg-primary-800 text-indigo-200 min-w-[250px] min-h-screen text-center">
    <h1 className="text-2xl mb-4">Menu</h1>
    {children}
  </nav>;
};
