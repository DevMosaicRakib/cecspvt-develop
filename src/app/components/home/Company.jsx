"use client";
import styles from "../components.module.scss";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const logos = [
  "/clients-logos/bAw/01.png",
  "/clients-logos/bAw/02.png",
  "/clients-logos/bAw/03.png",
  "/clients-logos/bAw/04.png",
  "/clients-logos/bAw/05.png",
  "/clients-logos/bAw/06.png",
  "/clients-logos/bAw/07.png",
  "/clients-logos/bAw/08.png",
  "/clients-logos/bAw/09.png",
];

export default function Company() {
  const redBox = useRef(null);
  const logoRefs = useRef([]);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 1,
      },
      scrollTrigger: {
        trigger: ".companies",
        start: "top center",

        markers: false,
      },
    });
    tl.from(redBox.current, {
      scaleY: 0,
    })
      .from([logoRefs.current], {
        opacity: 0,
        stagger: 0.03,
      })
      .from([".text h3", ".text p"], {
        opacity: 0,
        y: 20,
        stagger: 0.2,
      })
      .to(redBox.current, {
        scaleY: 1,
        duration: 1,
      }, "-=1")
      .to(
        [logoRefs.current],
        {
          opacity: 1,
          duration: 1,
        },
        "-=1",
      )
      .to(
        [".text h3", ".text p"],
        {
          opacity: 1,
          y: 0,
          stagger: .1,
        },
        "-=1",
      );
    // ScrollTrigger.refresh();
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <section className="companies">
      <div
        className={styles.sectionHeader}
        style={{ padding: "62px 0 0" }}
      ></div>
      <div className="wrapper">
        <div className="red-box" ref={redBox}>
          {logos.map((logo, index) => (
            <figure ref={(el) => logoRefs.current.push(el)} key={index}>
              <Image
                alt=""
                // layout="responsive"
                src={logo}
                fill={true}
              />
            </figure>
          ))}
        </div>
        <div className="text">
          <h3>Trusted by companies</h3>
          <p>
            Our aim is to exceed customer expectations as we constantly strive
            to set new benchmarks with exceptional service and outstanding
            results.
          </p>
        </div>
      </div>
    </section>
  );
}
