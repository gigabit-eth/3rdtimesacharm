"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import KeithGill from "@/public/images/keith-gill.gif";
import Community from "@/public/images/community.jpg";
import Reddit from "@/public/images/reddit.jpg";
import Stand from "@/public/images/stand.jpg";

export default function Features() {
  const observer = useRef<IntersectionObserver>();
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTab(1);
        }
      },
      { threshold: 0.5 }
    );
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gradient-to-b from-[#0CBFED] to-[#C7F183] transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0CBFED] to-[#C7F183] uppercase">
              $GME Memecoin:
            </h1>
            <p className="text-xl text-gray-300">
              This isn't just a cryptocurrency; it's a movement, a display of
              the digital community and the power of the underdog. Born on the
              Solana blockchain, known for its lightning-fast transactions and
              pioneering spirit, the <strong>$GME</strong> Memecoin embodies the
              essence of that historic rebellion against financial titans,
              channeling the raw energy and incredible support that defined the
              GameStop mania.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#F8C702] to-[#FE4F29] uppercase">
                  Let's run it back.
                </h3>
                <p className="text-xl text-gray-300">
                  In January of 2021 the GameStop short squeeze rocked the
                  world, and with it changed the face of retail investing. Fast
                  forward 3 years later, and <strong>$GME</strong> on Solana is
                  a tribute to the GameStop saga, a sheer digital force of
                  collective belief and the power of the underdog.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-gray-900 shadow-md border-gray-700 hover:shadow-lg"
                      : "bg-zinc-800 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-300 uppercase">
                      No halting this train
                    </div>
                    <div className="text-gray-400">
                      Wall Street screwed the normies, and the normies screwed
                      it right back. The GameStop short squeeze was a watershed
                      in a new era of financial rebellion, a moment when the
                      little guy had the big guy on the ropes. Now, the{" "}
                      <strong>$GME</strong> {""}
                      Memecoin is here to remind us that the power of the people
                      is greater than the people in power.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-zinc-700 rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-gray-900 shadow-md border-gray-700 hover:shadow-lg"
                      : "bg-zinc-800 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-300 uppercase">
                      Community-Driven Movement
                    </div>
                    <div className="text-gray-400">
                      At its core, <strong>$GME</strong> Memecoin is fueled by
                      its community, reflecting the collective will and
                      aspirations of its members. It's a vibe where voices are
                      heard, and actions resonate, shaping the future of the
                      memecoin and its underlying principles.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-zinc-700 rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-gray-900 shadow-md border-gray-700 hover:shadow-lg"
                      : "bg-zinc-800 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-300 uppercase">
                      Decentralized and Democratic
                    </div>
                    <div className="text-gray-600">
                      Embracing the freedom of decentralization,{" "}
                      <strong>$GME</strong> on Solana operates with a
                      transparent and democratic framework, ensuring that power
                      is distributed among its holders, not centralized in the
                      hands of a few, thereby challenging any tradfi dominance.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-zinc-700 rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={KeithGill}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/* <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full md:mb-auto"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={Reddit}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/* <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={Stand}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/* <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
