import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
};
export const TabItem = ({ children, active, onClick }: Props) => {
  return (
    <button type="button"
      className={`px-4 py-2 bg-neutral-700 border-none outline-none text-white cursor-pointer ${
        active ? "font-bold !bg-blue-700" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
