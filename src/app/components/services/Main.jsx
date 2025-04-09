"use client";

import Image from "next/image";
import img from "@/../public/services.svg";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Main() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#services main p",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      },
    ).fromTo(
      "#services main figure",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "-=.6",
    );
  }, []);
  return (
    <main>
      <p>
        Designed to exceed our clients&apos; expectations and ensure the
        successful completion of every project. Our dedicated team combines
        technical expertise, vast experience, and unwavering resourcefulness to
        bring your vision to life. We&apos;re not just builders; we&apos;re
        partners in your construction journey, offering a range of value-added
        services that support you at every stage of the construction process.
      </p>
      <figure>
        <Image src={img} alt="Services" priority={true} layout="responsive" />
      </figure>
    </main>
  );
}
