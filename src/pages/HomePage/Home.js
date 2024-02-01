import React from "react";
import Features from "../../components/Features";
import Products from "../../components/Products";
import HomeSlide from "../../components/Slider";
import Contact from "../ContactPage/Contact";
import Footer from "../../common/Footer";

export default function Home() {
  return (
    <>
      <HomeSlide />
      <Features />
      <Products />
    </>
  );
}
