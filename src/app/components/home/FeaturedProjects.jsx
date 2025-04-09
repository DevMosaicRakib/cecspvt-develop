"use client";

import Button from "@/app/components/Button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function FeaturedProjects() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        // duration: 1,
        // ease: "power4.in",
      },
      scrollTrigger: {
        trigger: ".featured-project",
        start: "top 60%",
        end: "30% 60%",
        // markers: false,
        // scrub: true,
      },
    });

    tl.from(
      [
        ".featured-project .content h3",
        ".featured-project .content p",
        ".featured-project .content .buf",
      ],
      {
        opacity: 0,
        y: 20,
        // stagger: 0.3,
      },
    ).to(
      [
        ".featured-project .content h3",
        ".featured-project .content p",
        ".featured-project .content .buf",
      ],
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
    );
  }, []);
  return (
    <section className="featured-project">
      <div className="content">
        <h3>Featured Project</h3>
        <p>
          Building an R&D plant for Astec LifeSciences, a subsidiary of Godrej
          Agrovet, manufacturer of chemicals, including a wide range of
          agrochemicals and pharmaceutical intermediates.
        </p>
        <Button classes="buf buf-primary" path="/projects">
          View all Project
        </Button>
      </div>
      <div className="image-box">
        <div className="header">Astec LifeSciences</div>
        <figure>
          <Image
            src="/astecrabale.png"
            alt="Home"
            width={1000}
            height={1000}
            layout={"responsive"}
            priority
          />
        </figure>
      </div>
    </section>
  );
}
