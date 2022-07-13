/* eslint-disable jsx-a11y/alt-text */
import React, {FC, useEffect, useState} from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right-3.png";
import imageAlif from "images/Alif - Type 72 - X.png"
import imageChampa from "images/Newton - Champa - Superior - S.png"
import imageCyprus from "images/Newton - Cyprus - ST-B - S.png"
import imageBahama from "images/Newton - Bahama - 2 BR-C - A.png";
import imageNewtonTower from "images/NewtonTower.png";
import imageAlifHomeSection from "images/AlifHomeCompleteSection.png";
import BackgroundImage from "images/Background 3.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaStore, FaStoreAlt} from 'react-icons/fa'

export interface SectionHero2Props {
    children?: React.ReactNode;
    className?: string;
}

const LandingPage: FC<SectionHero2Props> = ({ className = "", children }) => {
    const [loading, setLoading] = useState(true);    
    useEffect(() => {
        AOS.init();
        setTimeout(() => setLoading(false), 5000);
    }, [])
    // darkBg: {
	// 	position: 'fixed',
	// 	width: '100%',
	// 	height: '100%',
	// 	backgroundColor: 'rgba(0, 0, 0, 0.4)',
	// },
  return (
    <>
    {
        loading === false ? (
            <div>
            {/* <img src={BackgroundImage} className='fixed w-screen h-screen object-cover top-0 select-none' onContextMenu={() => {return false}}/> */}
                <div
                className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
                >
                    {/* landed house
                    high rise commercil
                    hospitality
                    lifestyle */}
                    <div className="flex flex-row items-center lg:flex-col lg:items-center justify-between">
                        <div className="lg:w-full flex flex-row lg:pr-16 lg:pl-16">
                            <div className="flex flex-col pr-4 pl-4 w-64 relative select-none flex-end">
                                <div className="group flex flex-col items-start" data-aos="fade-right" data-aos-duration='1000'>
                                    <div className="opacity-100 group-hover:opacity-50 float-right">
                                        <img style={{width: '75%', margin: 0}} src={imageAlif} alt="hero" className="float-right m-0"/>
                                    </div>
                                    <span className="opacity-25 group-hover:opacity-100 text-white group-hover:text-white bg-black absolute bottom-[2em] px-4 py-2 rounded-md text-center">Landed House</span>
                                </div>
                                <div className="group flex flex-col items-start" data-aos="fade-right" data-aos-duration='1000'>
                                    <div className="opacity-100 group-hover:opacity-50">
                                        <img style={{width: '75%'}} src={imageBahama} alt="hero" className="float-right"/>
                                    </div>
                                    <span className="opacity-25 group-hover:opacity-100 text-white group-hover:text-white bg-black absolute bottom-[2em] px-4 py-2 rounded-md text-center text-[12px]">High Rise Commercial</span>
                                </div>
                                <div className="group flex flex-col items-start" data-aos="fade-right" data-aos-duration='1000'>
                                    <div className="opacity-100 group-hover:opacity-50">
                                        <img style={{width: '75%'}} src={imageCyprus} alt="hero" className="float-right"/> 
                                    </div>
                                    <span className="opacity-25 group-hover:opacity-100 text-white group-hover:text-white bg-black absolute bottom-[2em] px-4 py-2 rounded-md text-center">Lifestyle</span>
                                </div>
                            </div>
                            <div className="flex-1 justify-center text-center my-4">
                                <span className='text-[2rem] font-semibold text-black text-center dark:text-white' data-aos="fade-down" data-aos-duration="2000">The First Secured Real Estate Exchange Market in The World</span>
                                <div className="flex flex-row items-center justify-center space-x-12 mt-20" data-aos="zoom-in" data-aos-duration='1500' data-aos-delay='1500'>
                                    <ButtonPrimary className="bg-[#FFD447] opacity-100 hover:opacity-50 hover:bg-[#FFD447] dark:bg-[##D9A443]" href="/primary-market/newton">
                                        <FaStore color="#000000"/>
                                        <span className="ml-2 text-center text-black">Primary Market</span>
                                    </ButtonPrimary>
                                    <ButtonPrimary className="bg-[#000000] opacity-100 hover:opacity-50 hover:bg-[#000000] dark:bg-[#FAF3E3]" href="/secondary-market/newton">
                                        <FaStoreAlt className="dark:text-black"/>
                                        <span className="ml-2 text-center text-white dark:text-black">Secondary Market</span>
                                    </ButtonPrimary>
                                </div>
                                <div className="flex flex-row" data-aos="fade-down" data-aos-duration="1000">
                                    <span className="text-left px-6" style={{marginTop: 75}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</span>
                                    <span className="text-left px-6" style={{marginTop: 160}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</span>
                                </div>
                            </div>
                            {/* <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-center space-y-8 sm:space-y-10 pr-4 pl-4 justify-center">
                            <h3 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%]">
                                Hassle~free transfer of property ownership
                            </h3> 
                            the first secured real estate exchange market in the world
                            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
                                With NFTs, the transaction process is streamlined, allowing you to
                                assume ownership of a piece of real estate within minutes.
                            </span>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex flex-row mx-8 mt-8">
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center items-center">
                                <img style={{width: '50%'}} src={imageNewtonTower} alt="hero" className="float-right"/> 
                                <h2 className="font-bold underline">Newton</h2>
                            </div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</span>
                            <div className="flex flex-row items-center justify-center space-x-4 mt-8 mb-8">
                                <ButtonPrimary className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3]" href="/primary-market/newton">
                                    {/* <FaStore className="text-black"/> */}
                                    <span className="text-center text-black">Newton Primary Market</span>
                                </ButtonPrimary>
                                <ButtonPrimary className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3]" href="/secondary-market/newton">
                                    {/* <FaStoreAlt className="text-black"/> */}
                                    <span className="text-center text-black">Newton Secondary Market</span>
                                </ButtonPrimary>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center items-center">
                                <img style={{width: '90%'}} src={imageAlifHomeSection} alt="hero" className="float-right"/> 
                                <h2 className="font-bold underline">Alif Homes</h2>
                            </div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</span>
                            <div className="group flex flex-row items-center justify-center space-x-4 mt-8 mb-8">
                                <ButtonPrimary className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3]" href="/primary-market/alif">
                                    {/* <FaStore className="text-black"/> */}
                                    <span className="text-center text-black">Alif Homes Primary Market</span>
                                </ButtonPrimary>
                                <ButtonPrimary className="bg-[#ffffff] border-2 border-black opacity-100 hover:opacity-50 hover:bg-[#ffffff] dark:bg-[#FAF3E3]" href="/secondary-market/alif">
                                    {/* <FaStoreAlt className="text-black"/> */}
                                    <span className="text-center text-black">Alif Homes Secondary Market</span>
                                </ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                {/* <img src={BackgroundImage} className='fixed w-screen h-screen object-cover top-0 select-none' onContextMenu={() => {return false}}/> */}
                <div className="text-center" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, margin: 'auto', width: 100, height: 100}}>
                    <svg role="status" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#a98102]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
            </div>
        )
    }
    </>
  );
}

export default LandingPage;
