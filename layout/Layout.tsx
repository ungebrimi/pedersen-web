import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "@/components/home/CTA";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
