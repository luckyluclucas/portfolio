"use client"

import { FC } from "react";

type item = {
  text: string
  classes?: string,
}

interface Props {
  items: item[];
  animate?: boolean;
  shadows?: boolean;
}

const LogoCarousel: FC<Props> = ({ items, animate = true, shadows = false }) => {
  return (
    <div
      className="flex overflow-hidden py-6 m-4"
      style={{
        maskImage: `${shadows && "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"}`,
      }}
    >
      {/* If your text don't fit entirely on your screen, try increasing the length of the array below. */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 ${animate && "animate-logo-carousel"}`}
        >
          {items.map(({ text, classes }) => (
            <p
              key={text}
              className={`ml-4 rounded-sm px-[0.8rem] text-xl w-40 dark:bg-slate-900/40 dark:text-white text-center font-bold leading-[5rem] border-1 mx-1 transition-all ease-in-out
              duration-200 hover:scale-105 tracking-tight ${classes}`}
            >
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogoCarousel;
