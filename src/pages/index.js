'use client';

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturesSection from "@/components/FeaturesSection";
import { LatestProjectsSection } from "@/components/LatestProjectsSection";
import CtaSection from "@/components/CtaSection";
import { Newsletter } from "@/components/newsletter/Newsletter";
import {AnimatedModal} from "@/components/ui/AnimatedModal";
import { CompareCode } from "@/components/ui/CompareCode";


export default function Home() {
  return (
      <>
        <HeroSection />
        <TechStack />
          <CompareCode/>
          <ServicesSection />
        <ProcessSection />
        <FeaturesSection />
        <LatestProjectsSection />
        <CtaSection />
          <Newsletter />

      </>
  );
}
