"use client";
import React, { useEffect } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import HowToBuy from "@/components/buy";
import Education from "@/components/education";
import Dictionary from "@/components/dictionary";
import Modal from "react-modal";

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

  // useEffect(() => {
  //   Modal.setAppElement("#root");
  // }, []);

  return (
    <>
      <Hero />
      <Features />
      <HowToBuy />
      <FeaturesBlocks />
      <Education />
      <Dictionary />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}
