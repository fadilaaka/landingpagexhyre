import React, { Fragment, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { nftName, nftsImgs, personNames } from "contains/fakeData";
import Avatar from "shared/Avatar/Avatar";
import VerifyIcon from "components/VerifyIcon";
import NcImage from "shared/NcImage/NcImage";
import ItemSort from "components/ItemSort/ItemSort";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NavWallet from "shared/Navigation/NavWallet";
import NavVoting from "shared/Navigation/NavVoting";

// const plans = [
//   {
// name: nftName[],
//     featuredImage: nftsImgs[0],
//   },
//   {
//     name: "Crypto Legend - Doctor",
//     featuredImage: nftsImgs[4],
//   },
//   {
//     name: "Crypto Legend - Lecturer",
//     featuredImage: nftsImgs[3],
//   },
//   {
//     name: "Crypto Legend - Teacher",
//     featuredImage: nftsImgs[1],
//   },
//   {
//     name: "Crypto Legend - Student",
//     featuredImage: nftsImgs[2],
//   },
// ];

const plans2 = [
  {
    name: nftName[12],
    creator: personNames[0],
    featuredImage: nftsImgs[0],
  },
  {
    name: nftName[2],
    creator: personNames[1],
    featuredImage: nftsImgs[4],
  },
  {
    name: nftName[5],
    creator: personNames[2],
    featuredImage: nftsImgs[3],
  },
  {
    name: nftName[6],
    creator: personNames[3],
    featuredImage: nftsImgs[1],
  },
  {
    name: nftName[0],
    creator: personNames[4],
    featuredImage: nftsImgs[2],
  },
  {
    name: nftName[5],
    creator: personNames[8],
    featuredImage: nftsImgs[1],
  },
  {
    name: nftName[11],
    creator: personNames[4],
    featuredImage: nftsImgs[5],
  },
];

const TabMarket = () => {
  const [isVisable, setIsVisable] = useState(false);
  const [nftName, setNftName] = useState("");

  const handleOpenMenu = (name: any) => {
    setNftName(name);
    setIsVisable(true);
  };
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="fixed right-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 translate-x-14"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-14"
              >
                <div className="z-10 relative">
                  <NavVoting
                    onClickClose={handleCloseMenu}
                    itemName={nftName}
                  />
                </div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter=" duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave=" duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-50" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const TABS = ["Primary Market", "Secondary Market"];
  const renderTabPrimaryMarkete = () => {
    return (
      <ul className="divide-y divide-neutral-100 dark:divide-neutral-700 overflow-auto">
        {plans2.map((_, index) => (
          <li
            key={index}
            className={`relative py-4 ${
              index % 2 === 1 ? "bg-neutradl-100" : ""
            }`}
          >
            <div className="flex items-center" style={{ position: "relative" }}>
              {/* <Avatar sizeClass="h-10 w-10" radius="rounded-full" /> */}
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <NcImage containerClassName="h-10 w-10" src={_.featuredImage} />
              </div>
              <span className="ml-4 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="flex items-center text-sm">
                  <span className="font-medium text-neutral-900 dark:text-neutral-200 ml-1">
                    {_.name}
                  </span>
                </span>
                <span className="text-xs mt-1 pl-1">Crypto Legend</span>
              </span>
              <span
                className="text-xs pr-3 text-right"
                style={{ position: "absolute", right: "8em" }}
              >
                {/* Starting at <br /> */}
                <span className="text-green-600 font-semibold text-sm">
                  {Math.floor(Math.random() * 999)} REX
                </span>
              </span>
              {/* <ButtonPrimary className="float-right absolute" style={{transform: "scale(.7"}}>Vote</ButtonPrimary> */}
              <button
                className="ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 px-6 py-1.5 rounded-full text-sm right-0 absolute"
                onClick={() => handleOpenMenu(_.name)}
              >
                Vote
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderTabItem = (item: string) => {
    switch (item) {
      case "Primary Market":
        return renderTabPrimaryMarkete();
      default:
        return null;
    }
  };

  return (
    <div className="w-1/2 px-2 sm:px-0 mx-auto pb-10">
      {renderContent()}
      <Tab.Group>
        <Tab.List className="flex justify-end pd-1 space-x-2.5 rounded-full dark:border-neutral-500 active:border-0">
          {/* {TABS.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-3.5 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm leading-5 font-medium rounded-full focus:outline-none focus:ring-2 ring-primary-300 ${
                  selected
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                    : "text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`
              }
            >
              {tab}
            </Tab>
          ))} */}
          <ItemSort />
        </Tab.List>
        <Tab.Panels className="mt-4">
          {TABS.map((tab, idx) => (
            <Tab.Panel key={idx} className={"rounded-xl focus:outline-none"}>
              {renderTabItem(tab)}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabMarket;
