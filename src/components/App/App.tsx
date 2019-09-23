import * as React from "react";
import { hot } from "react-hot-loader/root";
import "@/styles/index.css";

import HeaderBackground from "@assets/svgs/header-background-mobile.svg";
import HeaderIllustrator from "@assets/svgs/header-illustrator.svg";
import HeaderLogo from "@assets/svgs/header-logo.svg";
import { FaEnvelope, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Button, Input } from "@components";
import { MobileHeaderLogo } from "./App.styles";

const { useEffect, useState } = React;

const _App = () => {
  const [isDesktopMode, _setIsDesktopMode] = useState(true);

  const setIsDesktopMode = matchesDesktopMediaQuery => {
    if (matchesDesktopMediaQuery) {
      _setIsDesktopMode(true);
      return;
    }

    _setIsDesktopMode(false);
  };

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 376px)");
    setIsDesktopMode(desktopMediaQuery.matches);
    desktopMediaQuery.addEventListener("change", e => {
      setIsDesktopMode(e.matches);
    });
  }, []);

  return (
    <div className={`lg:flex`}>
      <div className="lg:w-5/12 h-screen overflow-hidden relative">
        {isDesktopMode ? (
          /* // Desktop Illustrator */
          <HeaderBackground
            preserveAspectRatio="none"
            viewBox="0 0 375 1"
            className="w-full h-full"
          />
        ) : (
          /* // Mobile Illustrator */
          <HeaderBackground
            preserveAspectRatio="none"
            viewBox="0 0 375 445"
            className="w-full h-full"
          />
        )}

        <div className="absolute p-container top-0 left-0 w-full h-full flex flex-col lg:flex-row  items-center">
          <div className="w-full flex justify-between lg:hidden block">
            <MobileHeaderLogo />

            <div className="text-white flex">
              <FaEnvelope className="ml-icon" size={15} />
              <FaTwitter className="ml-icon" size={15} />
              <FaFacebookF className="ml-icon" size={15} />
            </div>
          </div>
          <HeaderIllustrator className="w-full" viewBox="0 0 458 473" />
        </div>
      </div>
      <div className="lg:w-7/12 p-container flex flex-col justify-between ">
        <div className="flex lg:flex hidden">
          <HeaderLogo className="mr-auto" />

          <div className="text-black-blue flex">
            <FaEnvelope className="ml-icon" size={15} />
            <FaTwitter className="ml-icon" size={15} />
            <FaFacebookF className="ml-icon" size={15} />
          </div>
        </div>
        <div className="mb-20 lg:mb-0">
          <h1 className="mb-big text-2xl">
            ALL your files in one secure Location, accessible anywhere.
          </h1>
          <p className="mb-super-big">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co•workers.
          </p>
          <h1 className="mb-medium text-xl">Sign up for early access</h1>
          <div className="flex justify-between">
            <Input className="mr-medium" />
            <Button className="w-40">Sign Up</Button>
          </div>
        </div>
        <div className="flex">
          <a className="ml-auto" href="#">
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export const App = hot(_App);
