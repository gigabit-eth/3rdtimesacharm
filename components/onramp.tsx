// Purpose: Onramp section component for the landing page.
export default function OnRamp() {
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
                1.
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed254e] to-[#f9dc5c]">
                How to Buy
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c6f8ff] to-[#595cff]">
                SOL
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              This movement is different, there will be no halts, no
              restrictions, no market manipulation. The <strong>$GME</strong>
              Stop Solana memecoin is 100% decentralized and 100% community
              owned. We are the new standard.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="https://phantom.app/download"
                className="inline-block px-4 sm:px-8 py-2 text-white font-mono text-sm bg-slate-900 rounded-3xl hover:bg-slate-800 transition duration-150 ease-in-out capitalize sm:text-sm"
                target="_blank"
              >
                Install <span className="text-indigo-600">Phantom Wallet</span>{" "}
                and Come back!
              </a>
            </div>
          </div>

          {/* <Partners /> */}

          {/* How to buy Items */}
          <div
            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <iframe
              src="https://buy.onramper.com?apiKey=pk_prod_01HETEQF46GSK6BS5JWKDF31BT&mode=buy&defaultCrypto=sol&onlyCryptos=sol&defaultFiat=usd&onlyCryptoNetworks=solana&themeName=dark"
              title="Onramper Widget"
              height="630px"
              width="420px"
              allow="accelerometer; autoplay; camera; gyroscope; payment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
