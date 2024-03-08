"use client";

import { useState, useEffect, Fragment } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { HDMenu } from "../menu";
import Web3Wallet from "../web3/wallet";

const socials = [
  { name: "Telegram", href: "https://t.me/GMEonsol", target: "_blank" },
  {
    name: "(X) Twitter",
    href: "https://twitter.com/gmecoinsol",
    target: "_blank",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gmecoinsol",
    target: "_blank",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@gmecoinsol",
    target: "_blank",
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/gmecoinsol",
    target: "_blank",
  },
];

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-black backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <div className="ml-auto">
            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <Web3Wallet />
            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
