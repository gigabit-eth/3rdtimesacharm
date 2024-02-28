import dynamic from "next/dynamic";
import { LiFiWidget as LiFiWidgetImport, WidgetConfig } from "@lifi/widget";

const LiFiWidget = dynamic(
  () =>
    import("@lifi/widget").then(
      (mod) => mod.LiFiWidget as typeof LiFiWidgetImport
    ),
  { ssr: false } // This will load the module only on client-side
);

const widgetConfig: WidgetConfig = {
  integrator: "gmecoin",
  fee: 0.05,
  insurance: true,
  // tokens: {
  //   // Featured tokens appear on top of the list
  //   featured: [
  //     {
  //       address: "0x2fd6c9b869dea106730269e13113361b684f843a",
  //       symbol: "CHH",
  //       decimals: 9,
  //       chainId: 56,
  //       name: "Chihuahua",
  //       logoURI:
  //         "https://s2.coinmarketcap.com/static/img/coins/64x64/21334.png",
  //     },
  //   ],
  // },
  // toChain: 10,
  // toToken: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
  containerStyle: {
    // border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
  appearance: "dark",
  hiddenUI: ["appearance", "poweredBy"],
  theme: {
    palette: {
      primary: { main: "#38b000" },
      secondary: { main: "#fff" },
    },
    shape: {
      borderRadius: 5,
      borderRadiusSecondary: 5,
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  },
};

export default function FeaturesBlocks() {
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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ed254e] to-[#f9dc5c] uppercase">
              <span className="text-3xl text-white font-light italic mr-1 ">
                2.
              </span>{" "}
              Swap{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c6f8ff] to-[#595cff]">
                SOL
              </span>{" "}
              for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CBFED] to-[#C7F183]">
                $GME
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              As you stand at these digital crossroads, the{" "}
              <strong>$GME</strong>Stop Memecoin on Solana is more than a token;
              it's a testament to what happens when the masses awaken, a beacon
              for those who dare to dream of a different financial landscape.
              It's a tribute to every trader who, with a click, voted against
              the tyranny of traditional financial institutions, and a call to
              arms for a new generation of rebels.
            </p>
          </div>

          {/* Items */}

          <div
            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="flex flex-col items-center justify-center w-full sm:w-1/2 sm:mr-4">
              <LiFiWidget integrator="gmecoin" config={widgetConfig} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
