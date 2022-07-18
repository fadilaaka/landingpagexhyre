import React, { FC, useState, Fragment, useRef } from "react";
import { Tab } from "@headlessui/react";
import { personNames } from "contains/fakeData";
import Avatar from "shared/Avatar/Avatar";
import VerifyIcon from "components/VerifyIcon";
import { Transition, Dialog } from "@headlessui/react";

const TabDetail2 = () => {
  const [open, setOpen] = useState(false);
  const TABS = ["Ownership Bid", "Provenance", "Owner"];

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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                  <div className="bg-white px-6 pt-2 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start justify-center">
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
                          Approve Transaction
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="justify-center items-center flex flex-col">
                            <span>Open Price</span>
                            <div className="w-full bg-slate-400 text-center rounded-lg mt-2 py-2">
                              350 REX
                            </div>
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
                    <button className="ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 py-3 rounded-xl text-sm mt-4 w-[50%] justify-self-auto font-semibold ml-2"
                    onClick={() => null}>
                      Approve
                    </button>
                    <button
                      type="button"
                      className="ttnc-ButtonPrimary disabled:bg-opacity-70 bg-gray-600 hover:bg-primary-6000 text-neutral-50 py-3 rounded-xl text-sm mt-4 w-[50%] justify-self-auto font-semibold mr-2"
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

  const renderTabBidHistory = () => {
    return (
    <>
      {Modal()}
      <ul className="divide-y divide-neutral-100 dark:divide-neutral-700">
        {[1, 1, 1, 1, 1].map((_, index) => (
          <li
            key={index}
            className={`relative pb-3 pt-8 ${
              index % 2 === 1 ? "bg-neutradl-100" : ""
            }`}
          >
            <div className="flex items-center">
              <Avatar sizeClass="h-10 w-10" radius="rounded-full" containerClassName="-mt-6" />
              <span className="ml-4 text-neutral-500 dark:text-neutral-400 flex flex-col w-full">
                <span className="flex items-center text-sm relative">
                  {/* <span className="">
                    {Math.random() > 0.5
                      ? "Offer of $700 by"
                      : "Placed a bid $500 by"}
                  </span> */}
                  {/* <span className="">
                      {Math.random() > 0.5 ? "Listed by" : "Minted by"}
                    </span> */}
                  <div className="share inline-block absolute mb-5">
                    <span className="font-medium text-neutral-900 dark:text-neutral-200 ml-1 mr-2">
                      Martoutaa
                    </span>
                    <span className="ml-1">{Math.ceil(Math.random() * 100)}% of share</span>
                  </div>
                  <div className="inline-block absolute price mt-7">
                    <span className="ml-1">Last :</span>
                    <span className="ml-1 text-green-500">{Math.ceil(Math.random() * 300)} REX</span> <span className="mx-1">||</span>
                    <span className="ml-1">Open Price :</span>
                    <span className="ml-1 text-green-500">{Math.ceil(Math.random() * 700)} REX</span>
                  </div>
                </span>
                <span className="text-xs mt-8">Jun 14 - 4:12 PM</span>
              </span>
              <button className="ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 px-6 py-1.5 rounded-full text-sm top-8 right-0 absolute"
                data-modal-toggle="popup-modal" onClick={() => setOpen(true)}
                >Place Bid</button>
            </div>
          </li>
        ))}
      </ul>
    </>
    );
  };

  // const renderTabProvenance = () => {
  //   return (
  //     <ul className="divide-y divide-neutral-100 dark:divide-neutral-700">
  //       {[1, 1, 1, 1, 1].map((_, index) => (
  //         <li
  //           key={index}
  //           className={`relative py-4 ${
  //             index % 2 === 1 ? "bg-neutradl-100" : ""
  //           }`}
  //         >
  //           <div className="flex items-center">
  //             <Avatar sizeClass="h-10 w-10" radius="rounded-full" />
  //             <span className="ml-4 text-neutral-500 dark:text-neutral-400 flex flex-col">
  //               <span className="flex items-center text-sm">
  //                 <span className="">
  //                   {Math.random() > 0.5 ? "Listed by" : "Minted by"}
  //                 </span>

  //                 <span className="font-medium text-neutral-900 dark:text-neutral-200 ml-1">
  //                   Martoutaa
  //                 </span>
  //               </span>
  //               <span className="text-xs mt-1">Jun 14 - 4:12 PM</span>
  //             </span>
  //           </div>

  //           <span className="absolute inset-0 rounded-md focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"></span>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  // const renderTabOwner = () => {
  //   return (
  //     <div className="flex items-center py-4">
  //       <Avatar sizeClass="h-11 w-11" radius="rounded-full" />
  //       <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
  //         <span className="text-sm">Owner</span>
  //         <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
  //           <span>{personNames[1]}</span>
  //           <VerifyIcon iconClass="w-4 h-4" />
  //         </span>
  //       </span>
  //     </div>
  //   );
  // };

  const renderTabItem = (item: string) => {
    switch (item) {
      case "Ownership Bid":
        return renderTabBidHistory();

      // case "Provenance":
      //   return renderTabProvenance();

      // case "Owner":
      //   return renderTabOwner();

      default:
        return null;
    }
  };

  return (
    <div className="w-full pdx-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-start pd-1 space-x-2.5 rounded-full bordedr border-neutral-300 dark:border-neutral-500">
          <h3 className="font-semibold text-black dark:text-white text-xl">Ownership Bid</h3>
          {TABS.map(
            (tab) => ""
            // <Tab
            //   key={tab}
            //   className={({ selected }) =>
            //     `px-3.5 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm leading-5 font-medium rounded-full focus:outline-none focus:ring-2 ring-primary-300 ${
            //       selected
            //         ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
            //         : "text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
            //     }`
            //   }
            // >
            //   {tab}
            // </Tab>
          )}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {TABS.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              // className={
              //   "rounded-xl focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 "
              // }
            >
              {renderTabItem(tab)}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabDetail2;
