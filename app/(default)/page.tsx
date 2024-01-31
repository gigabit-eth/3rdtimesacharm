import ReactGA from "react-ga4";

ReactGA.initialize("G-7JQ3E7DQTJ");

export const metadata = {
  title: "$GME on Solana",
  description: "They Can't Halt This One.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import HowToBuy from "@/components/buy";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowToBuy />
      <FeaturesBlocks />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  );
}
