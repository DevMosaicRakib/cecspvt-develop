"use client";

import SectionHeader from "@/app/components/SectionHeader";
import { experinces } from "@/app/services/experinces";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function ExperienceCard({ title, src }) {
  return (
    <div className="experience-card">
      <div className="experience-card__title">
        <h3>{title}</h3>
      </div>
      <div className="experience-card__image">
        <Image
          src={src}
          alt="Services"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default function OurExperience() {
  const itemWrapper = useRef();
  const getScrollAmount = () => {
    return -(itemWrapper.current.scrollWidth - window.innerWidth + 80);
  };
  useLayoutEffect(() => {
    gsap.to(itemWrapper.current, {
      x: getScrollAmount,
      scrollTrigger: {
        trigger: "#our-experience",
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        scrub: 1,
        pin: true,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <section id="our-experience">
      <SectionHeader title="Our Experience" border="top" />
      <div ref={itemWrapper} className="items-wrapper">
        {experinces.map((item, index) => (
          <ExperienceCard key={index} title={item.title} src={item.path} />
        ))}
      </div>
    </section>
  );
}
