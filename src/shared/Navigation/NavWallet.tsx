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

export interface NavWalletProps {
  data?: NavItemType[];
  className?: string;
  onClickClose?: () => void;
}

const plans = [
  {
    name: "Metamask",
    img: metamaskImg,
  },
  {
    name: "Walletconnect",
    img: walletconnectImg,
  },
  {
    name: "Walletlink",
    img: walletlinkImg,
  },
  {
    name: "Fortmatic",
    img: fortmaticImg,
  },
];
const NavWallet: FC<NavWalletProps> = ({
  onClickClose,
}) => {
  const [showModal, setShowModal] = useState(false);

  const renderContent = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Scan to connect
        </h3>
        <span className="text-sm">
          Open Coinbase Wallet on your mobile phone and scan
        </span>

        <div className="p-5 border bg-white dark:bg-neutral-300 border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center justify-center mt-4">
          <NcImage className="w-40" src={QrCodeImg} />
        </div>

        <div className="mt-5 space-x-3">
          <ButtonPrimary type="submit">Install app</ButtonPrimary>
          <ButtonSecondary type="button">Cancel</ButtonSecondary>
        </div>
      </form>
    );
  };

  return (
    <div className="overflow-y-auto w-full max-w-sm h-screen transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="container">
        <div className="my-5 sm:lg:my-16 lg:my-24 max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold">
              Connect your wallet.
            </h2>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Connect with one of our available wallet providers or create a new
              one.
            </span>
          </div>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
          <div className="mt-5 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div className="space-y-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  onClick={() => setShowModal(true)}
                  typeof="button"
                  tabIndex={0}
                  className="relative rounded-xl hover:shadow-lg hover:bg-neutral-50 border 
                border-neutral-200 dark:border-neutral-700 px-3 sm:px-5 py-4 cursor-pointer flex 
                focus:outline-none focus:shadow-outline-blue focus:border-blue-500 dark:bg-neutral-800 
                dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                >
                  <div className="flex items-center w-full">
                    <NcImage
                      src={plan.img}
                      containerClassName="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 p-2 sm:p-3 bg-white rounded-full overflow-hidden shadow-lg"
                    />
                    <div
                      className={`ml-4 sm:ml-8 font-semibold text-sm sm:text-2xl `}
                    >
                      {plan.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---- */}
          </div>
        </div>
      </div>
      <NcModal
        renderTrigger={() => null}
        isOpenProp={showModal}
        renderContent={renderContent}
        contentExtraClass="max-w-md"
        onCloseModal={() => setShowModal(false)}
        modalTitle="Connect Wallet"
      />
    </div>
  );
};

export default NavWallet;
