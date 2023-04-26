import AboutWeb from "@/components/content/AboutWeb";
import CTA from "@/components/home/CTA";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <main className="w-full text-white">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/phone.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-bold leading-8 tracking-tight sm:text-6xl">
            A hitchhiker{`'`}s Guide to Responsive Web Design
          </h1>
          <p className="mt-6 text-lg leading-8">
            Here at Pedersen Web, I specialize in creating beautiful, functional
            websites that look great on any device. Whether you{`'`}re looking
            to revamp an existing site or create a new one from scratch, I{`'`}m
            here to help.
          </p>
        </div>
      </div>
      <AboutWeb />
      <CTA />
    </main>
  );
};

export default Index;
