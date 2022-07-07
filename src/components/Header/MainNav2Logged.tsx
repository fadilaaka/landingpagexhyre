import React, { FC } from "react";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Navigation from "shared/Navigation/Navigation";
import Button from "shared/Button/Button";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { Popover } from "@headlessui/react";
import ButtonDropDownShare from "components/ButtonDropDownShare";
import NcDropDown from "shared/NcDropDown/NcDropDown";
import NcDropDownWallet from "shared/NcDropDownWallet/NcDropDownWallet";
import {FaWallet} from 'react-icons/fa'
export interface MainNav2LoggedProps {}


const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const ethers = require("ethers");
  const network = "rinkeby"; // use rinkeby testnet
  const provider = ethers.getDefaultProvider(network);
  const address = "0x58B7514792A5fB080E3C7340230672fB23641CC3";
  
  
  let balanceInEth: any;
  provider.getBalance(address).then((balance: any) => {
    // convert a currency unit from wei to ether
    balanceInEth = ethers.utils.formatEther(balance);
    console.log(`balance: ${balanceInEth} ETH`);
  
    console.log(balanceInEth);
  });
  
  return (
    <div className={`nc-MainNav2Logged relative z-10 ${"onTop "}`}>
      <div className="container py-1 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo />
          {/* <div className="hidden sm:block flex-grow max-w-xs">
            <form action="" method="POST" className="relative">
              <Input
                type="search"
                placeholder="Search items"
                className="pr-10 w-full"
                sizeClass="h-[42px] pl-4 py-3"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input type="submit" hidden value="" />
            </form>
          </div> */}
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          {/* <ButtonPrimary> */}
          <NcDropDownWallet
      className="ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm sm:text-base font-medium px-4 py-3 sm:px-6 rounded-full"
      renderTrigger={() => (
        <div className="flex flex-row justify-center items-center">
          <FaWallet/>
          <span className="ml-2">MyWallet</span>
        </div>
      )}
      panelMenusClass="origin-top-right !-right-5 !w-40 sm:!w-52"
      onClick={() => {}}
      />
          {/* </ButtonPrimary> */}
        {/* <h3 className="font-semibold">Balance : <span className="text-teal-600">{`${balanceInEth} ETH`}</span></h3> */}

          {/* <div className="hidden items-center xl:flex space-x-2">
            <Navigation />
            <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
            <div className="flex">
              <SwitchDarkMode />
              <NotifyDropdown />
            </div>
            <div></div>
            <ButtonPrimary sizeClass="px-4 py-2 sm:px-5">Create</ButtonPrimary>
            <div></div>
            <AvatarDropdown />
          </div> */}
          <div className="flex items-center space-x-3 xl:hidden">
            {/* <NotifyDropdown />
            <AvatarDropdown /> */}
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2Logged;
