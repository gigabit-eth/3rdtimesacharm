import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-KLB2GV6V",
};

TagManager.initialize(tagManagerArgs);

export const metadata = {
  title: "$GMEStop on Solana",
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
