/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imageAlif from "images/Alif - Type 72 - X.webp";
import imageCyprus from "images/Newton - Cyprus - ST-B - S.webp";
import imageBahama from "images/Newton - Bahama - 2 BR-C - A.webp";
import imageNewtonTower from "images/NewtonTower.webp";
import imageAlifHomeSection from "images/AlifHomeCompleteSection.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStore, FaStoreAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const LandingPage: FC<SectionHero2Props> = ({ className = "", children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => setLoading(false), 3000);
  }, []);
  // darkBg: {
  // 	position: 'fixed',
  // 	width: '100%',
  // 	height: '100%',
  // 	backgroundColor: 'rgba(0, 0, 0, 0.4)',
  // },
  return (
    <>
      {loading === false ? (
        <div>
          <Helmet>
            <title>Xhyre</title>
          </Helmet>
          {/* <img src={BackgroundImage} className='fixed w-screen h-screen object-cover top-0 select-none' onContextMenu={() => {return false}}/> */}
          <div
            className={`nc-SectionHero2 flex flex-col relative ${className}`}
          >
            {/* landed house
                    high rise commercil
                    hospitality
                    lifestyle */}
            <div className="flex flex-col lg:flex-row lg:space-y-0 mx-16 my-8 lg:items-center relative">
              <div className="flex-1 w-full">
                <h1
                  className="leading-tight text-2xl lg:text-[2rem] font-semibold text-black text-left dark:text-white leading-small mb-4 w-[13em]"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  The First Secured Fractionalized Real Estate Exchange
                  Marketing in The World
                </h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <div
                  className="flex flex-col lg:flex-row items-start justify-start space-x-0 lg:space-x-8 mt-8"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="1500"
                >
                  <ButtonPrimary
                    className="bg-[#FFD447] opacity-100 hover:opacity-50 hover:bg-[#FFD447] dark:bg-[##D9A443] lg:mb-0 mb-3 w-90 lg:w-auto"
                    href="/primary-market/newton"
                  >
                    <FaStore color="#000000" />
                    <span className="ml-2 text-center text-black text-[12px]">
                      Primary Market
                    </span>
                  </ButtonPrimary>
                  <ButtonPrimary
                    className="bg-[#000000] opacity-100 hover:opacity-50 hover:bg-[#000000] dark:bg-[#FAF3E3] w-90 lg:w-auto"
                    href="/secondary-market/newton"
                  >
                    <FaStoreAlt className="dark:text-black" />
                    <span className="ml-2 text-center text-white dark:text-black text-[12px]">
                      Secondary Market
                    </span>
                  </ButtonPrimary>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div
                  className="group flex flex-col items-center lg:items-start p-5 lg:p-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="opacity-100 group-hover:opacity-50 lg:float-right justify-end flex">
                    <img
                      style={{ width: "75%" }}
                      src={imageBahama}
                      alt="hero"
                    />
                  </div>
                  {/* <span className="opacity-25 group-hover:opacity-100 text-white group-hover:text-white bg-black absolute bottom-[2em] px-4 py-2 rounded-md text-center text-[12px]">
                    High Rise Commercial
                  </span> */}
                </div>
                <div
                  className="group flex flex-col items-center lg:items-center p-5 lg:p-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="opacity-100 group-hover:opacity-50 justify-center flex">
                    <img
                      style={{ width: "100%"}}
                      src={imageAlif}
                      alt="hero"                    
                    />
                  </div>
                  {/* <span className="opacity-25 group-hover:opacity-100 text-white group-hover:text-white bg-black absolute bottom-[2em] px-4 py-2 rounded-md text-center">
                    Landed House
                  </span> */}
                </div>
                <div
                  className="group flex flex-col items-center  lg:items-start p-5 lg:p-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="opacity-100 group-hover:opacity-50 lg:float-right justify-start flex">
                    <img
                      style={{ width: "75%" }}
                      src={imageCyprus}
                      alt="hero"
                    />
                  </div>
                  {/* <span className="opacity-25 group-hover:opacity-100 text-white group-hover:text-white bg-black absolute bottom-[2em] px-4 py-2 rounded-md text-center">
                    Lifestyle
                  </span> */}
                </div>
              </div>
            </div>
            <div className="text-center justify-center align-center self-center border-t-2">
              <h2 className="font-bold text-[20px] my-4">Register your assets in Xhyre</h2>
              <div className="mx-auto my-4 w-1/2">
                <span className="text-sm justify-center text-center align-center items-center self-center content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</span>
              </div>
              <div className="mt-4 mb-12">
                <ButtonPrimary
                  className="bg-[#FFD447] opacity-100 hover:opacity-50 hover:bg-[#FFD447] dark:bg-[##D9A443] lg:mb-0 mb-3 w-90 lg:w-auto"
                  // href="/primary-market/newton"
                >
                  <span className="ml-2 text-center text-black text-[12px]">
                    Start Preregistration
                  </span>
                </ButtonPrimary>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col justify-between">
              <div className="lg:w-full flex lg:px-16 lg:flex-row">
                <div className="flex-1 my-4">
                  <div
                    className="flex flex-col lg:flex-row text-justify"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {/* <div className="flex-initial w-full lg:w-1/2 px-6 mt-[70px]">
                      <h2 className="font-bold underline mb-2">Primary Market</h2>
                      <span className="text-left">
                        NFT based fractional property primary marketplace by
                        using blockchain technology, as the 1st offering
                        platform to benefit from initially offered prices
                      </span>
                    </div>
                    <div className="flex-initial w-full lg:w-1/2 px-6 mt-8 lg:mt-[70px]">
                      <h2 className="font-bold underline mb-2">Secondary Market</h2>
                      <span className="text-left">
                        Capitalizing on such a high-yielding investment
                        opportunity, driven by property capital appreciation on
                        secondary marketplace, through traded NFT based proof of
                        fractional property ownership, besides the respective
                        percentage of monthly rental income
                      </span>
                    </div> */}
                  </div>
                </div>
                <div className="flex flex-row w-full pr-4 pl-4 lg:w-64 relative select-none flex-end">
                  
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col px-6 lg:px-0 lg:flex-row lg:mx-8 justify-center items-center mx-auto mt-16 lg:mt-10">
              <div className="flex flex-col text-justify w-full mx-6">
                <div className="flex flex-col items-center ">
                  <img
                    style={{ width: "100%" }}
                    src={imageAlifHomeSection}
                    alt="hero"
                    className="mb-8 mx-auto text-center inline-block"
                  />
                  <h2 className="font-bold underline mb-2 self-start">Alif Homes</h2>
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </span>
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-4 mt-8 mb-8">
                  <ButtonPrimary
                    className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3] w-5/6 lg:w-auto"
                    href="/primary-market/alif"
                  >
                    <span className="text-center text-black">
                      Alif Homes Primary Market
                    </span>
                  </ButtonPrimary>
                  <ButtonPrimary
                    className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3]  w-5/6 lg:w-auto lg:mt-0 mt-3"
                    href="/secondary-market/alif"
                  >
                    <span className="text-center text-black">
                      Alif Homes Secondary Market
                    </span>
                  </ButtonPrimary>
                </div>
              </div>
              <div className="flex flex-col text-justify w-full mx-6 mt-16 lg:mt-0">
                <div className="flex flex-col justify-center items-center">
                  <img
                    style={{ width: "40%" }}
                    src={imageNewtonTower}
                    alt="hero"
                    className="float-right mb-8"
                  />
                  <h2 className="font-bold underline mb-2 self-start">Newton</h2>
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </span>
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-4 mt-8 mb-8">
                  <ButtonPrimary
                    className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3] w-5/6 lg:w-auto"
                    href="/primary-market/newton"
                  >
                    <span className="text-center text-black">
                      Newton Primary Market
                    </span>
                  </ButtonPrimary>
                  <ButtonPrimary
                    className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3] w-5/6 lg:w-auto lg:mt-0 mt-3" 
                    href="/secondary-market/newton"
                  >
                    <span className="text-center text-black">
                      Newton Secondary Market
                    </span>
                  </ButtonPrimary>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        <div>
          {/* <img src={BackgroundImage} className='fixed w-screen h-screen object-cover top-0 select-none' onContextMenu={() => {return false}}/> */}
          <div
            className="text-center"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
              width: 100,
              height: 100,
            }}
          >
            <svg
              role="status"
              className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#a98102]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
