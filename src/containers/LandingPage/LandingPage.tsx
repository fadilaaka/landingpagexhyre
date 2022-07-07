import React, {FC, useEffect} from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right-3.png";
// import imageTypeX from "img/Alif Homes/Type 30/Alif - Type 30 - X.png";
import imageTypeNewton from "img/Newton/Cyprus/ST-A/Newton - Cyprus - ST-A - X.png";
import imageChampa from "img/Newton/Champa/Superior Corner/Newton - Champa - Superior Corner - X.png"
import imageBahama from "img/Newton/Bahama/2 BR-C/Newton - Bahama - 2 BR-C - A.png";
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
  return (
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
        {/* landed house
        high rise commercil
        hospitality
        lifestyle */}
      <div className="flex flex-row items-center lg:flex-col lg:items-center justify-between">
        <div className="lg:w-full flex flex-col items-center justify-center lg:pr-16 lg:pl-16">
            <span className='text-[2rem] font-semibold my-4 pb-12'>The First Secured Real Estate Exchange Market in The World</span>
            <div className="flex flex-row pr-4 pl-4 justify-center relative" >
                    <img style={{width: '25%'}} src={imageTypeNewton} alt="hero" data-aos="fade-right" data-aos-duration='1000'/>
                    <span className="absolute left-[15em] top-[-2em] border-[1px] px-4 py-2 border-sky-500 rounded-full">Landed House</span>
                    <img style={{width: '25%'}} src={imageBahama} alt="hero" data-aos="fade-down" data-aos-duration='1000'/>
                    <span className="absolute top-[-2em] border-[1px] px-4 py-2 border-sky-500 rounded-full">High Rise Commercial</span>
                    <img style={{width: '25%'}} src={imageChampa} alt="hero" data-aos="fade-left" data-aos-duration='1000'/> 
                    <span className="absolute right-[16.5em] top-[-2em] border-[1px] px-4 py-2 border-sky-500 rounded-full">Lifestyle</span>
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
                <ButtonPrimary href="/primary-market">
                    <FaStore/>
                    <span className="ml-2">Primary Market</span>
                </ButtonPrimary>
                <ButtonPrimary href="/secondary-market">
                    <FaStoreAlt/>
                    <span className="ml-2">Secondary Market</span>
                </ButtonPrimary>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default LandingPage;
