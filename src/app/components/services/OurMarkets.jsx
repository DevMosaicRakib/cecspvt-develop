"use client";

import styles from "../../components/components.module.scss";
import SectionHeader from "@/app/components/SectionHeader";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function OurMarkets() {
  useLayoutEffect(() => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-markets",
        markers: false,
        start: `${aspectRatio > 1 ? "40%" : "20%"} center`,
        end: `${aspectRatio > 1 ? "40%" : "20%"} bottom`,
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#our-markets .blue-overlay", {
      scaleY: 0,
    })
      .from("#our-markets .blue-overlay h3", {
        opacity: 0,
      })
      .from("#our-markets .blue-overlay li", {
        opacity: 0,
        x: -50,
        stagger: 0.3,
      })
      .to("#our-markets .blue-overlay", {
        scaleY: 1,
      })
      .to("#our-markets .blue-overlay h3", {
        opacity: 1,
      })
      .to("#our-markets .blue-overlay li", {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        onComplete: () => {
          document
            .querySelector("#our-markets .blue-overlay ul")
            .classList.add(styles.liHover);
        },
      });
    // ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        st.kill();
      });
    };
  }, []);
  return (
    <section id="our-markets">
      <SectionHeader title="Our Marktes" />
      <div className="content">
        <figure>
          <Image
            src="/market.png"
            alt="Services"
            fill={true}
          />
        </figure>
        <div className="boxes-wrapper">
          <div className="blue-overlay">
            <h3>Residential</h3>
            <ul>
              <li>Urban Landscapes</li>
              <li>Skyscrapers</li>
              <li>Transportation Infrastructure</li>
              <li>Tunnelling & Pipejacking</li>
              <li>Metallic Constructions</li>
            </ul>
          </div>
          <div className="red-box">
            <h3 className="uppercase">Industrial</h3>
            <ul className={styles.liHover}>
              <li>Turnkey Projects</li>
              <li>Energy Systems</li>
              <li>Transportation Infrastructure</li>
              <li>Tunnelling & Pipejacking</li>
              <li>Metallic Constructions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
