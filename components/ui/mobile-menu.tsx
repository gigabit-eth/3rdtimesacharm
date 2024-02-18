"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-black"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="https://fraudon.wallstsucks.lol"
                className="btn-sm text-white bg-[#f68a24] hover:bg-[#ffa652] w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://dexscreener.com/solana/9tz6vykibdlyx2rngwc5tesu4pyve4jd6tm56352ugte"
                className="btn-sm text-white bg-green-600 hover:bg-[#35c870] w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Chart</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://headbands.wallstsucks.lol/"
                className="btn-sm text-white bg-red-600 hover:bg-[#FF0000] w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Headbands</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/GMEONSOL"
                className="btn-sm text-white bg-blue-800 hover:bg-gray-800 w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Telegram</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/gmecoinsol"
                className="btn-sm text-white bg-blue-500 hover:bg-gray-800 w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="btn-sm text-white bg-[#DB417D] hover:bg-gray-800 w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="btn-sm text-white bg-[#8C44F8] hover:bg-gray-800 w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Twitch</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="btn-sm text-white bg-[#F72A53] hover:bg-gray-800 w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>TikTok</span>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
