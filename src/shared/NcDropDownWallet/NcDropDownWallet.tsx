import React, { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useParams } from "react-router-dom";
import {FaEthereum} from "react-icons/fa"

// type Param = {
//   data: any;
// }
export interface NcDropDownItem {
  id: string;
  name: string;
  icon?: string;
  href?: string;
}

export interface NcDropDownProps {
  className?: string;
  panelMenusClass?: string;
  iconClass?: string;
  renderTrigger?: () => JSX.Element;
  renderItem?: (item: NcDropDownItem) => JSX.Element;
  title?: string;
  onClick: (item: NcDropDownItem) => void;
  address?: string;
  balance?: string;
  data?: any;
}

const NcDropDownWallet: FC<NcDropDownProps> = ({
  className = `h-8 w-8 flex items-center justify-center`,
  iconClass = "w-4 h-4 sm:h-5 sm:w-5",
  panelMenusClass = "origin-top-right",
  title = "More",
  data,
  renderTrigger,
  renderItem,
  onClick,
}) => {
  // const {data} : Param = useParams();
  // console.log(data);
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={className} title={title}>
        {renderTrigger ? (
          renderTrigger()
        ) : (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none">
            <path
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`px-1 py-3 text-sm text-neutral-6000 dark:text-neutral-300 border-2 dark:border-white-400 absolute ${panelMenusClass} right-0 w-56 mt-2 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg dark:ring-white ring-opacity-5 dark:ring-opacity-10 z-30`}
        >
            <div className="flex flex-col mb-8 px-4">
                <h1 className="text-black dark:text-white self-center">Account 1</h1>
                <span className="text-slate-400 dark:text-slate-300 truncate">{data.address}</span>
            </div>
            <div className="flex flex-col justify-center items-center mb-8">
                <FaEthereum className="mb-8" size={40}/>
                <h1 className="text-black dark:text-white">{data.balance} ETH</h1>
                <h3 className="text-slate-400 dark:text-slate-300">$1.088,24</h3>
            </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NcDropDownWallet;
