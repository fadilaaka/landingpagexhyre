import React, { FC } from "react";
import { nftsImgs } from "contains/fakeData";

export interface Prices2Props {
  className?: string;
  price?: string;
  contentClass?: string;
  labelTextClassName?: string;
  labelText?: string;
  id?: any;
}

const Prices2: FC<Prices2Props> = ({
  className = "pt-3",
  price = Math.ceil(Math.random() * 777) + " REX",
  contentClass = "py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold",
  labelTextClassName = "bg-white",
  // labelText = Math.random() > 0.4 ? "Price" : "Current Bid",
  labelText = "Market Cap",
  id
}) => {
  const url = window.location.pathname.split("/");

  return (
    <div className={`${className}`}>
      <div
        className={`flex items-baseline border-2 border-green-500 rounded-lg relative ${contentClass} `}
      >
        <span
          className={`block absolute font-normal bottom-full translate-y-1 p-1 -mx-1 text-xs text-neutral-500 dark:text-neutral-400 ${labelTextClassName}`}
        >
          {labelText}
        </span>
        <span className=" text-green-500 !leading-none">{nftsImgs[url[2]][id][2]} REX</span>
      </div>
    </div>
  );
};

export default Prices2;