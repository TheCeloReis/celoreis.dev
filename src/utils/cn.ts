import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export default cn;
