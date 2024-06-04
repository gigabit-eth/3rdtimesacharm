import dynamic from "next/dynamic";
import { LoadingIndicator } from "./lifi/loadingIndicator";
import { useEffect, useState } from "react";

const LiFiWidgetNext = dynamic(
  () => import("./lifi/widget").then((module) => module.Widget) as any,
  {
    ssr: false,
    loading: () => <LoadingIndicator />,
  }
);

export default function FeaturesBlocks() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        "8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB"
      );
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }

    setTimeout(() => {
      setCopySuccess("");
    }, 1500); // Clear the message after 5 seconds
  };

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-black pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gradient-to-b from-[#36BCE0] to-[#C436F1] transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-24">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-6 mt-20"
              //data-aos="zoom-y-in"
            >
              <span className="text-white">Wall St. {""}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FE4A49] to-[#FED766]">
                Can't{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FE4A49] to-[#FED766]">
                Stop Us Now
              </span>
            </h1>
            <h2 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ed254e] to-[#f9dc5c] uppercase">
              Swap{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c6f8ff] to-[#595cff]">
                Any coin
              </span>{" "}
              to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CBFED] to-[#C7F183]">
                $GME
              </span>
            </h2>
            <p className="text-2xl text-gray-300 italic">
              Across 20+ chains & thousands of tokens!
            </p>
          </div>

          {/* Items */}

          <div
            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="flex flex-col items-center justify-center w-full sm:w-1/2 sm:mr-4">
              <LiFiWidgetNext />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
