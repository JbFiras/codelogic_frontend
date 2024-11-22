import React from "react";
import HeaderNavbar from "@/components/HeaderNavbar";
import HeroSection from "@/components/LandingPage/heroSection/heroSection";
import {Newsletter} from "@/components/newsletter";
import Services from "@/components/LandingPage/heroSection/services";
import IconCarousel from "@/components/LandingPage/heroSection/IconCarousel";

export default function LandingPage() {
  return (
    <>
        <HeaderNavbar />
        <HeroSection />
        <IconCarousel />
        <Services />
        <Newsletter />
    </>
  );
}
