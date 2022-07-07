import React, { FC, useState } from "react";
import imagePng from "images/hero-right-3.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";
import { RadioGroup } from "@headlessui/react";
import { nftsImgs } from "contains/fakeData";
import NcImage from "shared/NcImage/NcImage";
import { CheckIcon } from "@heroicons/react/solid";
import TabMarket from "containers/TabMarket/TabMarket";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}
const plans = [
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[0],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[3],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[1],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[2],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[3],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[4],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[2],
  },
  {
    name: "Crypto Legend - Professor",
    featuredImage: nftsImgs[5],
  },
];

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  const [selected, setSelected] = useState(plans[1]);
  return (
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col items-center lg:flex-row lg:items-center">
        <div className="lg:w-full flex flex-row items-start space-x-12 justify-center">
        {/* <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-14 lg:mr-10 xl:mr-0"> */}
          {/* <h3 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            Hassle~free transfer of property ownership
          </h3> */}
          {/* <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            With NFTs, the transaction process is streamlined, allowing you to
            assume ownership of a piece of real estate within minutes.
          </span> */}
          <ButtonPrimary>
            <span>Primary Market</span>
            {/* <span>
              <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
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
            </span> */}
          </ButtonPrimary>
          <ButtonPrimary>
            <span>Secondary Market</span>
          </ButtonPrimary>
        </div>

        <div className="flex-grow" >
          <img style={{width: '100%', margin: '0 auto'}} src={imagePng} alt="hero" />
          {/* <img className="w-full" src={imagePng} alt="hero" /> */}
          {/* <h3 className="mt-20 font-semibold text-xl">Limited Offer</h3>
          <RadioGroup value={selected} onChange={setSelected}>
            /* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="flex overflow-auto -space-x-[3.5em] customScrollBar">
              {plans.map((plan, index) => (
                <RadioGroup.Option
                  key={index}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                        : ""
                    }
                  ${
                    checked
                      ? "bg-neutral-100"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }
                    relative flex-shrink-0 w-44 rounded-xl border border-neutral-200 dark:border-neutral-700 px-6 py-5 cursor-pointer flex focus:outline-none `
                  }

                  style={{"transform":"scale(.6)"}}
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <div className="flex items-center justify-between">
                              <RadioGroup.Description
                                as="div"
                                className={"rounded-full w-16"}
                              >
                                <NcImage
                                  containerClassName="aspect-w-1 aspect-h-1 rounded-full overflow-hidden"
                                  src={plan.featuredImage}
                                />
                              </RadioGroup.Description>
                              /* {checked && (
                                    <div className="flex-shrink-0 text-white">
                                      <CheckIcon className="w-6 h-6" />
                                    </div>
                                  )}
                            </div>
                            <RadioGroup.Label
                              as="p"
                              className={`font-semibold mt-3  ${
                                checked ? "text-dark" : ""
                              }`}
                              style={{"fontSize": "1.06rem"}}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <TabMarket /> */}
        </div>
      </div>

      {/* <div className="z-10 mb-12 lg:mb-0 lg:-mt-20 xl:-mt-40 w-full">
        <HeroSearchForm />
      </div> */}
    </div>
  );
};

export default SectionHero2;
