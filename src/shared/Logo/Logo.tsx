import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/LOGO-09.png";
import logoLightImg from "images/LOGO-09.png";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  imgDropShadow?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  imgDropShadow = false,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <img
          className={`block max-h-24 ${imgLight ? "dark:hidden" : ""}`}
          style= {{filter: imgDropShadow ? 'drop-shadow(0px 0px 2px white)' : 'drop-shadow(0px 0px 0px black)'}}
          src={img}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-24 dark:block"
          src={imgLight}
          style= {{filter: imgDropShadow ? 'drop-shadow(0px 0px 2px white)' : 'drop-shadow(0px 0px 0px black)'}}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
