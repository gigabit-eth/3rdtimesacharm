import Logo from "./logo";
import {
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiYoutube,
  SiTiktok,
  SiTelegram,
  SiTwitch,
} from "react-icons/si";

const navigation = {
  main: [
    // { name: "About", href: "#" },
    { name: "Blog", href: "https://fraudon.wallstsucks.lol/" },
    {
      name: "Chart",
      href: "https://dexscreener.com/solana/9tz6vykibdlyx2rngwc5tesu4pyve4jd6tm56352ugte",
    },
    { name: "Headbands", href: "https://headbands.wallstsucks.lol/" },
    { name: "Merch", href: "https://wallstsucks.store/" },
    // { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Telegram",
      href: "https://t.me/GMEonsol",
      icon: (props: any) => <SiTelegram />,
    },
    {
      name: "X",
      href: "https://twitter.com/gmecoinsol",
      icon: (props: any) => <SiTwitter />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/gmecoinsol",
      icon: (props: any) => <SiInstagram />,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@gmecoinsol",
      icon: (props: any) => <SiTiktok />,
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/gmecoinsol",
      icon: (props: any) => <SiTwitch />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">
        <nav
          className="mx-auto text-center -mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm font-extrabold lowercase leading-6 text-gray-600 hover:text-red-600"
                target="_blank"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500 uppercase">
          Not affiliated, nor endorsed by GameStop Inc.
        </p>
        <p className="mt-2 text-center text-xs leading-5 text-gray-500 uppercase">
          No promise of future value.
        </p>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024
        </p>
      </div>
    </footer>
  );
}
