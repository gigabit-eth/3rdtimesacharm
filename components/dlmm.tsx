import METEORA from "./meteora";
export default function DLMM() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-black pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gradient-to-b from-[#36BCE0] to-[#C436F1] transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-14">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-10">
            <h2 className="h2 mb-4 uppercase">
              <span className="text-3xl text-white font-extralight italic mr-1">
                3.
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed254e] to-[#f9dc5c]">
                Earn Fees on
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CBFED] to-[#C7F183]">
                GME
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="https://www.youtube.com/watch?v=HV-Enxuet60"
                className="inline-block px-4 sm:px-8 py-2 text-white font-mono text-sm bg-slate-900 rounded-3xl hover:bg-slate-800 transition duration-150 ease-in-out capitalize"
                target="_blank"
              >
                How-to provide liquidity on Meteora
              </a>
            </div>
          </div>

          {/* <Partners /> */}

          {/* DLMM WIDGET PLACEHOLDER */}
          <div className="max-w-sm mx-auto grid gap-6 items-center justify-center md:grid-cols-1 lg:grid-cols-1 md:max-w-2xl lg:max-w-none">
            <METEORA />
          </div>
        </div>
      </div>
    </section>
  );
}
