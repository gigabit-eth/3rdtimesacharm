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
                <li className="mb-4 md:mb-0 md:ml-4 md:mt-2">
                  <a
                    href="https://www.instagram.com/gmecoinsol?igsh=eW1ibWRrZnlnbTFs"
                    className="flex justify-center items-center text-gray-200 hover:text-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    {/* IG SVG icon */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      className="w-8 h-8 fill-current"
                    >
                      <path
                        d="M16 2.883c4.272 0 4.778.016 6.465.093 1.56.071 2.407.332 2.971.551.747.29 1.28.637 1.84 1.197s.907 1.093 1.197 1.84c.219.564.48 1.411.551 2.971.077 1.687.093 2.193.093 6.465s-.016 4.778-.093 6.465c-.071 1.56-.332 2.407-.551 2.971a4.954 4.954 0 0 1-1.197 1.84c-.56.56-1.093.907-1.84 1.197-.564.219-1.411.48-2.971.551-1.687.077-2.193.093-6.465.093s-4.779-.016-6.465-.093c-1.56-.071-2.407-.332-2.971-.551a4.954 4.954 0 0 1-1.84-1.197 4.954 4.954 0 0 1-1.197-1.84c-.219-.564-.48-1.411-.551-2.971-.077-1.687-.093-2.193-.093-6.465s.016-4.778.093-6.465c.071-1.56.332-2.407.551-2.971.29-.747.637-1.28 1.197-1.84a4.954 4.954 0 0 1 1.84-1.197c.564-.219 1.411-.48 2.971-.551 1.687-.077 2.193-.093 6.465-.093M16 0c-4.345 0-4.89.018-6.597.096C7.7.174 6.537.444 5.519.84a7.855 7.855 0 0 0-2.834 1.845A7.855 7.855 0 0 0 .84 5.519C.444 6.537.174 7.7.096 9.403.018 11.11 0 11.655 0 16c0 4.345.018 4.89.096 6.597.078 1.703.348 2.866.744 3.884a7.855 7.855 0 0 0 1.845 2.834 7.834 7.834 0 0 0 2.834 1.845c1.018.396 2.181.666 3.884.744C11.11 31.982 11.655 32 16 32s4.89-.018 6.597-.096c1.703-.078 2.866-.348 3.884-.744a7.855 7.855 0 0 0 2.834-1.845 7.834 7.834 0 0 0 1.845-2.834c.396-1.018.666-2.181.744-3.884C31.982 20.89 32 20.345 32 16s-.018-4.89-.096-6.597c-.078-1.703-.348-2.866-.744-3.884a7.855 7.855 0 0 0-1.845-2.834A7.855 7.855 0 0 0 26.481.84C25.463.444 24.3.174 22.597.096 20.89.018 20.345 0 16 0Zm0 7.784a8.216 8.216 0 1 0 0 16.432 8.216 8.216 0 0 0 0-16.432Zm0 13.55a5.333 5.333 0 1 1 0-10.667 5.333 5.333 0 0 1 0 10.666ZM26.461 7.46a1.92 1.92 0 1 1-3.841-.001 1.92 1.92 0 0 1 3.841.001Z"
                        fill="#333"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left md:flex-grow md:mx-4 text-sm text-gray-600 mb-4 md:mb-4">
          <div className="font-extrabold uppercase">GMEStop 🎮 </div>
          <div className="mt-4 md:mt-0 font-mono">
            <a
              href="https://gmestop.notion.site/gmestop/Brand-Kit-9349e52130ea48f1b07c00aecff5a7b6"
              className="hover:text-white font-extrabold lowercase"
              target="_blank"
              rel="noreferrer"
            >
              brandkit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
