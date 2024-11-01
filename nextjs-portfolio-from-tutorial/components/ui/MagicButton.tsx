import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  iconPosition: string;
  handleClick?: () => void; // optional
  otherStyles?: string; // optional
}

const MagicButton = ({
  title,
  icon,
  iconPosition,
  handleClick,
  otherStyles,
}: MagicButtonProps) => {
  return (
    <button className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none mt-7 md:w-60 md:t-10">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`${otherStyles} gap-2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl`}
      >
        {iconPosition === "left" && icon}
        {title}
        {iconPosition === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
