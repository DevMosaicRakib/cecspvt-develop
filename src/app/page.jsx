"use client";

import "././style/home.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExploreSection from "@/app/components/home/ExploreSection";
import { useLayoutEffect } from "react";
import Services from "@/app/components/home/Services";
import Company from "@/app/components/home/Company";
import FeaturedProjects from "@/app/components/home/FeaturedProjects";
import BlueSection from "@/app/components/home/BlueSection";
import Hero from "@/app/components/home/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <div id="home">
      <Hero />
      <ExploreSection />
      <Services />
      <Company />
      <FeaturedProjects />
      <BlueSection />
    </div>
  );
}
