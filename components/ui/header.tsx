"use client";

import { useState, useEffect, Fragment } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://fraudon.wallstsucks.lol/"
                  className="font-bold uppercase text-gray-600 hover:text-[#f68a24] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  target="_blank"
                >
                  <span>Blog</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://dexscreener.com/solana/9tz6vykibdlyx2rngwc5tesu4pyve4jd6tm56352ugte"
                  className="font-bold uppercase text-gray-600 hover:text-[#35c870] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  target="_blank"
                >
                  <span>Chart</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://headbands.wallstsucks.lol/"
                  className="font-bold uppercase text-gray-600 hover:text-[#FF0000] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  target="_blank"
                >
                  <span>Headbands</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Popover className="relative m-6">
                  <Popover.Button className="inline-flex items-center gap-x-1 text-md font-bold font-sans uppercase leading-6 text-gray-600">
                    <span>Social</span>
                    <ChevronDownIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 pr-4 md:pr-4 1200:pr-0">
                      <div className="w-56 shrink rounded-xl bg-zinc-800 p-4 text-sm font-semibold leading-6 text-gray-500 shadow-lg ring-1 ring-gray-900/5">
                        {socials.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block p-2 hover:text-gray-100 text-center md:flex md:flex-col"
                            target={item.target}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
