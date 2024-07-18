import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Container = ({ children }: Props) => {
  return <div className="ml-[250px] flex grow py-4 px-4">{children}</div>;
};
