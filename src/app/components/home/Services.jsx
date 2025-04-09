"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

import Button from "@/app/components/Button";

export default function Services() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
      scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        end: "10% 60%",
        // scrub: true,
        // markers: true,
      },
    });
    tl.from(
      [
        ".services .block-1 h1",
        ".services .block-2 p",
        ".services .block-2 .buf",
      ],
      {
        opacity: 0,
        duration: 1,
        y: 20,
        stagger: 0.2,
      },
    ).to(
      [
        ".services .block-1 h1",
        ".services .block-2 p",
        ".services .block-2 .buf",
      ],
      {
        opacity: 1,
        y: 0,
      },
    );
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <section className="services">
      <div className="block-1">
        <h1>
          Experts in building
          <br />a better infrastructure
        </h1>
      </div>
      <div className="block-2">
        <p>
          CECS Engineers specializes in the creation and supervision of
          infrastructure solutions. The company&apos;s activities encompass the
          full spectrum of operations, from initial design and construction to
          ongoing operation and maintenance.
        </p>
        <Button classes="buf buf-primary" path="/services">
          Discover our services
        </Button>
      </div>
    </section>
  );
}
