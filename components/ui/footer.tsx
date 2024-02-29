import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="text-center md:text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-black">
          <div className="sm:col-span-12 lg:col-span-12 mx-auto md:mx-0">
            <div className="flex flex-col items-center mb-2">
              <Logo />
            </div>
            <div className="capitalize text-gray-300 sm:text-sm font-semibold ">
              Not affiliated, nor endorsed by GameStop Inc.
            </div>
            <div className="capitalize text-gray-300 sm:text-sm font-semibold ">
              No promise of financial gain.
            </div>
            <div className="capitalize text-gray-300 sm:text-sm font-semibold ">
              DYOR
            </div>
            <div className="flex flex-col items-center py-4 md:py-8 border-t border-black">
              <ul className="flex flex-col items-center md:flex-row justify-center md:justify-center mb-4 md:order-1 md:mb-0 mx-auto md:mx-0">
                {/* Social media links */}
                {/* Twitter */}
                <li className="mb-4 md:mb-0">
                  <a
                    href="https://t.me/GMEONSOL"
                    className="flex justify-center items-center text-gray-600 hover:text-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    aria-label="Telegram"
                    target="_blank"
                  >
                    {/* Telegram SVG icon */}
                    <svg
                      className="w-8 h-8 fill-current"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Telegram</title>
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </li>
                {/* Telegram */}
                <li className="mb-4 md:mb-0 md:ml-4 md:mt-2">
                  <a
                    href="https://twitter.com/gmecoinsol"
                    className="flex justify-center items-center text-gray-600 hover:text-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    aria-label="Twitter"
                    target="_blank"
                  >
                    {/* Twitter SVG icon */}
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                {/* Instagram */}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left md:flex-grow md:mx-4 text-sm text-gray-600 mb-4 md:mb-4">
          <div className="font-extrabold uppercase">GMECoin 🎮 </div>
          <div className="font-extrabold uppercase"></div>
          <div className="mt-4 md:mt-0 font-mono">
            {/* <a
              href="https://twitter.com/wya_eth"
              className="hover:text-white font-extrabold lowercase"
              target="_blank"
              rel="noreferrer"
            >
              wya.eth
            </a> */}
            2024
          </div>
        </div>
      </div>
    </footer>
  );
}
