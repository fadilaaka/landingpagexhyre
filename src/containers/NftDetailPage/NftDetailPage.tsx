import React, {
  FC,
  useState,
  Fragment,
  useRef,
  ReactNode,
  useEffect,
} from "react";
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
import TabDetail from "./TabDetail";
import collectionPng from "images/nfts/collection.png";
import ItemTypeVideoIcon from "components/ItemTypeVideoIcon";
import LikeButton from "components/LikeButton";
import AccordionInfo from "./AccordionInfo";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import { Transition, Dialog } from "@headlessui/react";
import NavWallet from "shared/Navigation/NavWallet";
import { useParams } from "react-router-dom";
import FormItem from "components/FormItem";
import Input from "shared/Input/Input";
import getRandomInt from "utils/getRandomInt";
import { Tooltip } from "./Tooltip";
// import { ExclamationIcon } from "@heroicons/react/outline";

export interface NftDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}

type Param = {
  type: any;
  id: any;
};

type Data = {
  name: string;
  price: any;
  buyed: any;
  time: string;
};

const NftDetailPage: FC<NftDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {
  const [open, setOpen] = useState(false);
  const { type, id }: Param = useParams();

  const randomNumber = (length: any) => {
    return Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
    );
  };

  let maxREX =
    type === "alif" ? nftsImgs["alif"][id][2] : nftsImgs["newton"][id][2];

  const [inputREX, setInputREX] = useState("");
  const [voterList, setVoterList] = useState<Data[]>([]);

  const percentage = ((parseFloat(inputREX) / maxREX) * 100).toFixed(2);

  let totalREX = 0;

  const handleOnChange = (e: any) => {
    e.preventDefault();
    if (e.target.value !== "0") {
      if (Number(e.target.value) > maxREX || Number(e.target.value) > selisih) {
        setInputREX(selisih.toString());
      } else {
        setInputREX(e.target.value);
      }
    }
  };
  const inputChangedHandler = (e: any) => {
    const updatedKeyword = e.target.value;
    // May be call for search result
  };

  console.log(voterList);
  console.log(voterList.length);

  for (const rex of voterList) {
    totalREX = totalREX + parseFloat(rex.price);
  }
  console.log(totalREX);
  const selisih = maxREX - totalREX;
  console.log(`Selisih : ${selisih}`);

  if (totalREX > maxREX) {
    totalREX = maxREX;
  }
  let totalPercentage: any = ((totalREX / maxREX) * 100).toFixed(2);

  const now = new Date();
  console.log(now.toLocaleString());

  const handleOnClick = (e: any) => {
    setVoterList([
      ...voterList,
      {
        name: "0x45cv6389sw...",
        price: inputREX,
        buyed: percentage,
        time: now.toLocaleString(),
      },
    ]);
    setOpen(false);
    setInputREX("");
    console.log(voterList);
  };

  const Modal = () => {
    const cancelButtonRef = useRef(null);

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-6 pt-2 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div> */}
                      <div className="mt-3 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-semibold text-gray-900 mb-5"
                        >
                          Buy Ownership
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="flex w-full items-center">
                            <FormItem label="Buy Nominal">
                              <Input
                                placeholder="1"
                                type="number"
                                onChange={handleOnChange}
                                value={inputREX}
                                onKeyDown={(evt) =>
                                  ["e", "E", "+", "-"].includes(evt.key) &&
                                  evt.preventDefault()
                                }
                              />
                            </FormItem>
                            <span className="mt-7 mx-2 font-semibold text-slate-600">
                              REX
                            </span>
                            <FormItem label="Valuation">
                              <Input
                                placeholder="%"
                                type="number"
                                onChange={(e: any) => inputChangedHandler(e)}
                                value={percentage}
                              />
                            </FormItem>
                            <span className="mt-7 mx-2 font-semibold text-slate-600">
                              %
                            </span>
                          </div>
                          <div className="justify-center flex">
                            <button
                              className="ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 py-3 rounded-full text-sm mt-6 w-full justify-self-auto font-semibold"
                              onClick={handleOnClick}
                            >
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {/* <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button> */}
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between relative">
            {/* <div className="flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">
                Current Price
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-green-500">
                1.000 ETH
              </span>
              <span className="text-lg text-neutral-400 sm:ml-5">
                ( ≈ $3,221.22)
              </span>
            </div> */}
            <div className="thrasehold flex w-full relative lg:absolute mb-5">
              <span className=" text-green-500 flex justify-end absolute lg:static -bottom-3">
                <span className="truncate w-[4em] block">{totalREX}</span>
                <span className="block ml-1"> REX</span>
              </span>
              <span className="text-sm text-slate-400 lg:pl-3 pl-28 absolute lg:relative -bottom-3 lg:-bottom-[0.18rem]">
                {`collected from ${
                  type === "alif"
                    ? nftsImgs["alif"][id][2]
                    : nftsImgs["newton"][id][2]
                } REX`}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <Tooltip message={totalPercentage.toString()}>
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${totalPercentage}%` }}
                ></div>
              </Tooltip>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400  sm:ml-4 justify-center absolute lg:static right-0 top-10 lg:top-8 lg:w-28">
              {`${
                type == "alif"
                  ? nftsImgs["alif"][id][3]
                  : nftsImgs["newton"][id][3]
              } days left`}
            </span>
            <span className="text-sm text-slate-400 dark:text-neutral-400 top-10 lg:top-8 lg:-left-10  sm:mt-0 sm:ml-10 absolute">
              {voterList.length} buyers
            </span>
          </div>
          <br />
          <ButtonPrimary
            className={`absolute top-8 ${
              totalPercentage.toString() === "100.00"
                ? "bg-slate-500 hover:bg-slate-500"
                : ""
            }`}
            data-modal-toggle="popup-modal"
            type="button"
            disabled={totalPercentage.toString() === "100.00" ? true : false}
            onClick={() => setOpen(true)}
          >
            {totalPercentage.toString() === "100.00"
              ? "Closed"
              : "Buy Ownership"}
          </ButtonPrimary>
          <br />
          <br />
          {/* {showModal ? (
            <div
              id="popup-modal"
              tabIndex={-1}
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
            >
              <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="p-6 text-center">
                    <svg
                      className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this product?
                    </h3>
                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null} */}
        </div>
        {/* ---------- 9 ----------  */}
        <div className="pt-9">
          <TabDetail data={voterList} />
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
      {Modal()}
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
      {!isPreviewMode && (
        <div className="container py-24 lg:py-32">
          {/* SECTION 1 */}
          <div className="relative py-24 lg:py-28">
            <BackgroundSection />
            <SectionSliderCategories />
          </div>

          {/* SECTION */}
          <SectionBecomeAnAuthor className="pt-24 lg:pt-32" />
        </div>
      )}
    </div>
  );
};

export default NftDetailPage;
