import { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

const Button = ({ children }: ChildrenProps) => {
  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="w-24 flex flex-col items-center mb-2 rounded-3xl px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-white"
    >
      {children}
    </button>
  );
};

export default Button;
