/* eslint-disable jsx-a11y/alt-text */
import React, {FC, useEffect, useState} from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right-3.png";
// import imageTypeX from "img/Alif Homes/Type 30/Alif - Type 30 - X.png";
// import imageTypeNewton from "img/Newton/Cyprus/ST-A/Newton - Cyprus - ST-A - X.png";
import imageChampa from "images/Newton - Champa - Superior - S.png"
import imageCyprus from "images/Newton - Cyprus - ST-C - S.png"
import imageBahama from "images/Newton - Bahama - 2 BR-A - S.png";
import BackgroundImage from "images/Background 3.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaStore, FaStoreAlt} from 'react-icons/fa'

export interface SectionHero2Props {
    children?: React.ReactNode;
    className?: string;
}

const LandingPage: FC<SectionHero2Props> = ({ className = "", children }) => {
    useEffect(() => {
        AOS.init()
    })
    // darkBg: {
	// 	position: 'fixed',
	// 	width: '100%',
	// 	height: '100%',
	// 	backgroundColor: 'rgba(0, 0, 0, 0.4)',
	// },
  return (
    <>
    <img src={BackgroundImage} className='fixed w-screen h-screen object-cover top-0 select-none' onContextMenu={() => {return false}}/>
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
        {/* landed house
        high rise commercil
        hospitality
        lifestyle */}
      <div className="flex flex-row items-center lg:flex-col lg:items-center justify-between">
        <div className="lg:w-full flex flex-col items-center justify-center lg:pr-16 lg:pl-16">
            <span className='text-[2rem] font-semibold my-4 text-white text-center'>The First Secured Real Estate Exchange Market in The World</span>
            <div className="flex flex-row pr-4 pl-4 justify-center relative select-none">
                <div className="group flex flex-col justify-center items-center" data-aos="fade-right" data-aos-duration='1000'>
                    <div className="opacity-100 group-hover:opacity-50">
                        <img style={{width: '75%', margin: '0 auto'}} src={imageChampa} alt="hero"/>
                    </div>
                    <span className="opacity-25 group-hover:opacity-100 text-black group-hover:text-white absolute bottom-[3em] border-[1px] px-4 py-2 border-white-500 rounded-md text-center">Landed House</span>
                </div>
                <div className="group flex flex-col justify-center items-center" data-aos="fade-down" data-aos-duration='1000'>
                    <div className="opacity-100 group-hover:opacity-50">
                        <img style={{width: '75%', margin: '0 auto'}} src={imageBahama} alt="hero"/>
                    </div>
                    <span className="opacity-25 group-hover:opacity-100 text-black group-hover:text-white absolute bottom-[3em] border-[1px] px-4 py-2 border-white-500 rounded-md text-center">Lifestyle</span>
                </div>
                <div className="group flex flex-col justify-center items-center" data-aos="fade-left" data-aos-duration='1000'>
                    <div className="opacity-100 group-hover:opacity-50">
                        <img style={{width: '75%', margin: '0 auto'}} src={imageCyprus} alt="hero"/> 
                    </div>
                    <span className="opacity-25 group-hover:opacity-100 text-black group-hover:text-white absolute bottom-[3em] border-[1px] px-4 py-2 border-white-500 rounded-md text-center">High Rise Commercial</span>
                </div>
            </div>
            <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-center space-y-8 sm:space-y-10 pr-4 pl-4 justify-center">
            {/* <h3 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%]">
                Hassle~free transfer of property ownership
            </h3> 
            the first secured real estate exchange market in the world
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
                With NFTs, the transaction process is streamlined, allowing you to
                assume ownership of a piece of real estate within minutes.
            </span> */}
            <div className="flex flex-row items-center justify-center space-x-12" data-aos="zoom-in" data-aos-duration='1500' data-aos-delay='1500'>
                <ButtonPrimary className="bg-[#512f94]" href="/primary-market">
                    <FaStore/>
                    <span className="ml-2 text-center">Primary Market</span>
                </ButtonPrimary>
                <ButtonPrimary className="bg-[#a98102]" href="/secondary-market">
                    <FaStoreAlt/>
                    <span className="ml-2 text-center">Secondary Market</span>
                </ButtonPrimary>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default LandingPage;
