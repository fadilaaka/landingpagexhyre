import React, { FC } from "react";
import { nftsImgs } from "contains/fakeData";

export interface PricesProps {
  className?: string;
  labelTextClassName?: string;
  labelText?: string;
  price?: string;
  contentClass?: string;
  id?: any;
}

const Prices: FC<PricesProps> = ({
  className = "",
  labelTextClassName = "bg-white",
  price = "",
  id,
}) => {
  const url: any = window.location.pathname.split("/");

  return (
    <div className={`${className}`}>
      <span
        className={`block text-xs text-neutral-500 dark:text-neutral-400 ${labelTextClassName}`}
      >
        {/* {Math.random() > 0.5 ? "Price" : "Current Bid"} */}
        Price
      </span>
      <span className="block text-xl font-semibold text-green-500 ">
        {nftsImgs[url[2]][id][2]} REX
      </span>
    </div>
  );
};

export default Prices;