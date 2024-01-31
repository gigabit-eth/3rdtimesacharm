"use client";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import HowToBuy from "@/components/buy";

const tagManagerArgs = {
  gtmId: "GTM-KLB2GV6V",
};

TagManager.initialize(tagManagerArgs);

const metadata = {
  title: "$GMEStop on Solana",
  description: "They Can't Halt This One.",
};

export default function Home() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-KLB2GV6V",
    };

    import("react-gtm-module")
      .then((TagManager) => {
        TagManager.default.initialize(tagManagerArgs);
      })
      .catch((err) => console.error("Failed to load gtm-module", err));
  }, []);

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
