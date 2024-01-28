import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Wall St. {""}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Can't{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Stop It Now
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                In the shadow of a financial rebellion that shook the very
                foundations of Wall Street, the spirit of defiance lives on,
                morphing into a digital phoenix that rises from the ashes of the
                past. As the calendar marks the third anniversary of the
                GameStop short squeeze saga, a new emblem of resistance is born,
                etched into the very fabric of the blockchain. Enter the $GME
                Solana memecoin, a token not just of value, but of a statement,
                a reminder of the day when David stood tall against Goliath,
                armed with nothing but unity and the will to challenge the
                status quo.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-black hover:bg-gray-600 w-full mb-4 sm:w-auto sm:mb-0 border border-gray-900"
                    href="https://jup.ag/swap/SOL-GME_8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB"
                    target="_blank"
                  >
                    Buy on Jupiter
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:ml-4 mb-4 sm:mb-0"
                    href="https://raydium.io/swap/?outputCurrency=8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB"
                    target="_blank"
                  >
                    Buy on Raydium
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-black hover:bg-gray-800 w-full sm:w-auto sm:ml-4 border border-gray-900"
                    href="https://birdeye.so/token/8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB?chain=solana"
                    target="_blank"
                  >
                    Buy on Birdeye
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
