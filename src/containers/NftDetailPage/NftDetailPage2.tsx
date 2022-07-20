import React, { FC, useState, Fragment, useRef } from "react";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import NcImage from "shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import VerifyIcon from "components/VerifyIcon";
import {
  nftName,
  nftsImgs,
  nftsLargeImgs,
  personNames,
} from "contains/fakeData";
import TimeCountDown from "./TimeCountDown";
import collectionPng from "images/nfts/collection.png";
import ItemTypeVideoIcon from "components/ItemTypeVideoIcon";
import LikeButton from "components/LikeButton";
import AccordionInfo from "./AccordionInfo";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import { Transition, Dialog } from "@headlessui/react";
import NavWallet from "shared/Navigation/NavWallet";
import { useParams } from "react-router-dom";
import TabDetail2 from "./TabDetail2";
import getRandomInt from "utils/getRandomInt";

export interface NftDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}

type Param = {
  type: any;
  id: any;
};

const NftDetailPage2: FC<NftDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {
  const { type, id }: Param = useParams();
  
  const renderSection1 = () => {
    return (
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {/* ---------- 1 ----------  */}
        <div className="pb-9 space-y-5">
          <div className="flex justify-between items-center">
            <Badge name="Assets" color="green" />
            <LikeSaveBtns />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {type === "alif"
              ? nftsImgs["alif"][id][1]
              : nftsImgs["newton"][id][1]}
          </h2>

          {/* ---------- 4 ----------  */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center ">
              <Avatar sizeClass="h-9 w-9" radius="rounded-full" />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Creator</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>{personNames[1]}</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
            <div className="hidden sm:block h-6 border-l border-neutral-200 dark:border-neutral-700"></div>
            <div className="flex items-center">
              <Avatar
                imgUrl={collectionPng}
                sizeClass="h-9 w-9"
                radius="rounded-full"
              />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Collection</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>{"The Moon Ape"}</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* ---------- 6 ----------  */}
        <div className="py-9">
          <TimeCountDown />
        </div>

        {/* ---------- 7 ----------  */}
        {/* PRICE */}
        <div className="pb-9 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">
                Market Cap
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-green-500">
              {`${
                  type === "alif"
                    ? nftsImgs["alif"][id][2]
                    : nftsImgs["newton"][id][2]
                } REX`}
              </span>
              <span className="text-lg text-neutral-400 sm:ml-5">
                {`≈ ($${getRandomInt(777, 9999)})`}
              </span>
            </div>

            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-5 mt-2 sm:mt-0 sm:ml-10">
              {`[${getRandomInt(33, 99)} in stocks]`}
            </span>
          </div>
        </div>

        {/* ---------- 9 ----------  */}
        <div className="pt-9">
          <TabDetail2 />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-NftDetailPage  ${className}`}
      data-nc-id="NftDetailPage"
    >
      {/* MAIn */}
      <main className="container mt-11 flex ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            {/* HEADING */}
            <div className="relative">
              <NcImage
                src={
                  type === "alif"
                    ? nftsImgs["alif"][id][0]
                    : nftsImgs["newton"][id][0]
                }
                containerClassName="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden"
              />
              {/* META TYPE */}
              <ItemTypeVideoIcon className="absolute left-3 top-3  w-8 h-8 md:w-10 md:h-10" />

              {/* META FAVORITES */}
              <LikeButton className="absolute right-3 top-3 " />
            </div>

            <AccordionInfo />
          </div>

          {/* SIDEBAR */}
          <div className="pt-10 lg:pt-0 xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            {renderSection1()}
          </div>
        </div>
      </main>

      {/* OTHER SECTION */}
      {!isPreviewMode && ( ""
        // <div className="container py-24 lg:py-32">
          // {/* SECTION 1 */}
          // <div className="relative py-24 lg:py-28">
           // {/* <BackgroundSection /> */}
           // {/* <SectionSliderCategories /> */}
          // </div>

          //{/* SECTION */}
          // <SectionBecomeAnAuthor className="pt-24 lg:pt-32" />
        // </div>
      )}
    </div>
  );
};

export default NftDetailPage2;
