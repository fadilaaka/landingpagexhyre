import React, { FC, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Helmet } from "react-helmet";
import NcModal from "shared/NcModal/NcModal";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import NcImage from "shared/NcImage/NcImage";
import QrCodeImg from "images/qr-code.png";
import metamaskImg from "images/metamask.webp";
import walletconnectImg from "images/walletconnect.webp";
import walletlinkImg from "images/walletlink.webp";
import fortmaticImg from "images/fortmatic.webp";
import { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "data/navigation";
import Logo from "shared/Logo/Logo";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import { Route, useParams } from "react-router-dom";

export interface NavVotingProps {
  data?: NavItemType[];
  className?: string;
  itemName?: string;
  onClickClose?: () => void;
}

const NavVoting: FC<NavVotingProps> = ({ onClickClose, itemName }) => {
  const [isRedeem, setIsredeem] = useState(false);
  const [isListing, setisListing] = useState(false);
  return (
    <div
      className="overflow-y-auto w-full max-w-lg h-screen transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800"
      style={{ width: "30em" }}
    >
      <div className="container">
        <div className="my-5 sm:lg:my-16 lg:my-24 max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold text-black">
              NFT Voting
            </h2>
            {/* <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Connect with one of our available wallet providers or create a new
              one.
            </span> */}
          </div>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
          <div className="mt-5 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div className="space-y-3">
              <span className="block mt-3 pb-2 text-neutral-500 dark:text-neutral-400 font-bold text-xl">
               {itemName}
              </span>
              <span className="text-green-600 pt-20  font-semibold text-md">
                  Price : {Math.floor(Math.random() * 999)} REX
                </span>
              <div className="w-full flex pt-16">
                <div className="w-1/2 text-center">
                  <span className="text-primary-500 text-xl font-semibold">
                    {isRedeem ? 12 : 11}
                  </span>
                </div>
                <div className="w-1/2 text-center">
                  <span className="text-green-500 text-xl font-semibold">
                    {isListing ? 123 : 122}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-6 px-5 space-x-2">
              <ButtonPrimary
                className="!px-10"
                onClick={() => setIsredeem(!isRedeem)}
              >
                Redeem
              </ButtonPrimary>
              <ButtonSecondary
                className="flex-1"
                onClick={() => setisListing(!isListing)}
              >
                Listing
              </ButtonSecondary>
            </div>
            {/* ---- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavVoting;
