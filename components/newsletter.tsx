import WSBGUY from "./ui/avatar";

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div className="pb-6 md:pb-10">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="95.542%"
                    cy="34.553%"
                    fx="65.542%"
                    fy="44.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#FE4F29" offset="0%" />
                    <stop stopColor="#ff930f" offset="55.317%" />
                    <stop stopColor="#fff95b" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#0061ff">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                  </g>
                  <g fill="#0061ff">
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                  </g>
                  <g fill="#FE4F29">
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                  </g>
                  <g fill="#FC0100">
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                  </g>
                  <g fill="#31F183">
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                  </g>
                  <g fill="#C7F183">
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                  </g>
                  <g fill="#40c9ff">
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                  </g>
                  <g fill="#D739D4">
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2 capitalize">
                  Want more $GME University?
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Subscribe to our newsletter for updates on new guides and
                  exclusive tutorials.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <iframe
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "100%",
                        width: "480px",
                      }}
                      src="https://fraudon.wallstsucks.lol/embed?minimal=true&vertical=true"
                      height="90"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">
                    No spam. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
