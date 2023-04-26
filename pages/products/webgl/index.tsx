import React from "react";
import WebGLHero from "@/components/content/WebGLHero";
import AboutWebGL from "@/components/content/AboutWebGL";
import CTA from "@/components/home/CTA";
import InspoSites from "@/components/content/InspoSites";

const Index = () => {
  return (
    <>
      <WebGLHero />
      <AboutWebGL />
      <InspoSites />
      <CTA />
    </>
  );
};

export default Index;
