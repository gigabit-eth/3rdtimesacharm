export default function Education() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-black pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd800] to-[#7902aa]">
              $GME University
            </h2>
            <p className="text-xl text-gray-300">
              Discover $GME, the movement coin designed to unite people on the
              Solana blockchain. Watch, learn, and stay updated on the latest in
              the $GME ecosystem.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 3rd item */}
            <a
              href="https://phantom.app/learn/blog/security-at-phantom"
              target="_blank"
            >
              <div className="relative flex flex-col items-center p-6 bg-zinc-800 rounded shadow-xl">
                <svg
                  className="w-16 h-16 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      className="fill-current text-zinc-900"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g strokeWidth="2">
                      <path
                        className="stroke-current text-blue-300"
                        d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
                      />
                      <path
                        className="stroke-current text-white"
                        strokeLinecap="square"
                        d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
                      />
                      <path
                        className="stroke-current text-blue-300"
                        d="M36.571 32H40"
                      />
                      <path
                        className="stroke-current text-white"
                        d="M24 32h3.429"
                        strokeLinecap="square"
                      />
                    </g>
                  </g>
                </svg>

                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-200">
                  Phantom Wallet Security
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Basic wallet security, scammer/hacker attacks, avoid spam
                  coins & nfts
                </p>
              </div>
            </a>

            {/* 4th item */}
            <a
              href="https://nordiccrypto.io/tangem-wallet-vs-ledger-which-wallet-is-the-best/"
              target="_blank"
            >
              <div className="relative flex flex-col items-center p-6 bg-zinc-800 rounded shadow-xl">
                <svg
                  className="w-16 h-16 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      className="fill-current text-zinc-900"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g strokeWidth="2">
                      <path
                        className="stroke-current text-white"
                        d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                      />
                      <path
                        className="stroke-current text-white"
                        d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                      />
                      <path
                        className="stroke-current text-white"
                        d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                      />
                      <path
                        className="stroke-current text-blue-300"
                        d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                        strokeLinecap="square"
                      />
                    </g>
                  </g>
                </svg>

                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-200">
                  Hardware Cold Storage
                </h4>
                <p className="text-gray-600 text-center">
                  Highly recommended way to store your digital assets
                </p>
              </div>
            </a>

            {/* 5th item */}
            <a
              href="https://medium.com/coinmonks/you-need-a-sol-domain-right-now-e2c2d2699501"
              target="_blank"
            >
              <div className="relative flex flex-col items-center p-6 bg-zinc-800 rounded shadow-xl">
                <svg
                  className="w-16 h-16 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      className="fill-current text-zinc-900"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g strokeWidth="2">
                      <path
                        className="stroke-current text-white"
                        d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z"
                      />
                      <path
                        className="stroke-current text-blue-300"
                        d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8"
                      />
                      <path
                        className="stroke-current text-white"
                        d="M34.286 29.714L32 32"
                      />
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-200">
                  Why a .SOL Domain?
                </h4>
                <p className="text-gray-600 text-center">
                  Simple explanation of the benefits of owning a .SOL domain
                </p>
              </div>
            </a>

            {/* 6th item */}
            <a href="https://forms.gle/HTFmfCZXyLHVE1De7" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-zinc-800 rounded shadow-xl">
                <svg
                  className="w-16 h-16 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      className="fill-current text-zinc-900"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g strokeWidth="2" strokeLinecap="square">
                      <path
                        className="stroke-current text-white"
                        d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775"
                      />
                      <path
                        className="stroke-current text-blue-300"
                        d="M44.571 43.429H34.286M44.571 37.714H34.286"
                      />
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-200">
                  You Decide!
                </h4>
                <p className="text-gray-600 text-center">
                  Tell us what the next SOL tutorial should be!
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
