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
            </div>
        ) : (
            <div>
                <img src={BackgroundImage} className='fixed w-screen h-screen object-cover top-0 select-none' onContextMenu={() => {return false}}/>
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
