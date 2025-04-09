"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlueSection() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".blue-section",
        // markers: true,
        // scrub: true,
        start: "top 40%",
        end: "bottom 40%",
      },
    });
    tl.from(".blue-section .header", {
      opacity: 0,
      y: 30,
    }).to(".blue-section .header", {
      opacity: 1,
      y: 0,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section className="blue-section">
      <div className="wrapper">
        <div className="header">
          <p>
            Promoting India’s responsible development through ethical, social
            and environmental friendly contributions.
          </p>
          <img src="/logo.svg" />
        </div>
        <figure>
          <Image
            src="/sus.png"
            width={1000}
            height={1000}
            layout={"responsive"}
            alt=""
            priority
          />
        </figure>
      </div>
      <div className="reach-out">
        <p>
          Whether you&apos;re initiating a project, seeking assistance, or
          simply have a general inquiry, we&apos;re happy to assist.
        </p>
        <button className="buf buf-primary">
          <Link href="/contact">Reach out to us</Link>
        </button>
      </div>
    </section>
  );
}
