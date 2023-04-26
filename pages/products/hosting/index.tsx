import AboutHosting from "@/components/content/AboutHosting";
import HostingHero from "@/components/content/HostingHero";
import CTA from "@/components/home/CTA";
import React from "react";

const index = () => {
  return (
    <>
      <HostingHero />
      <AboutHosting />
      <CTA />
    </>
  );
};

export default index;
