"use client";

import "./style.scss";
import styles from "@/app/components/components.module.scss";
import SectionHeader from "@/app/components/SectionHeader";
import Card from "@/app/components/Card";
import people from "@/app/company/people";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Image from "next/image";
import heroImg from "@/../public/about-us-heading.png";

gsap.registerPlugin(ScrollTrigger);
export default function Company() {
  useLayoutEffect(() => {
    const coreTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#core",
        markers: false,
        start: "top 60%",
        // end: "top 60%",
        // scrub: true,
      },
    });

    /* Hero Animation */
    {
      gsap.fromTo(
        "#hero span",
        {
          opacity: 0,
          y: 50,
          duration: 1,
        },
        {
          opacity: 1,
          y: 0,
        },
      );
      gsap.fromTo(
        "#hero p",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power4.out",
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#hero p",
            start: "top 60%",
            end: "top top",
            // markers: true,
            // scrub: true,
          },
        },
      );
    }

    /* Core Values Animation */
    {
      coreTl
        .from("#core .red-box", {
          scaleY: 0,
        })
        .from("#core ul li", {
          opacity: 0,
          x: -50,
          stagger: 0.1,
        })
        .to("#core .red-box", {
          scaleY: 1,
        })
        .to("#core ul li", {
          x: 0,
          opacity: 1,
        });

      gsap.fromTo(
        "#core .blue-box p",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#core .blue-box",
            start: "top 60%",
          },
        },
      );
    }
    ScrollTrigger.refresh();
    return () => {
      // coreTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <div id="company">
      <main id="hero">
        <figure>
          <Image src={heroImg} priority={true} alt="company" />
          <span>
            Operating assets in an environment friendly and sustainable way with
            a focus on growth and profitability.
          </span>
        </figure>
        <p>
          CECS Engineers Pvt. Ltd. is Indian-based construction services firm,
          stands as a prominent figure in a wide array of market sectors. Our
          track record is distinguished by their ability to handle substantial
          and intricate projects, commitment to driving innovation, enthusiastic
          adoption of cutting-edge technologies, and substantial impact on the
          well-being of their clients, workforce, and the community at large.
          CECS Engineers provides clients with the personalized attention and
          assistance typically found in local businesses, all while offering the
          robust stability and extensive resources characteristic of
          multinational corporations.
        </p>
      </main>
      <section id="core">
        <SectionHeader title={"Core Values"} />
        <div className="red-box origin-top">
          <ul className={styles.liHover}>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Integrity</li>
            <li>Reliability</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="blue-box">
          <p>
            “These core values form a unified foundation, characterized by their
            mutual complementarity and interdependence. By unwaveringly
            embracing these principles, we transform into the very embodiment of
            our desired identity – a organization propelled by its values,
            dedicated to the pursuit of a shared vision rooted in excellence and
            compassion. The responsibility for upholding and propagating these
            values lies with our employees.”
            <br />
          </p>
          <div>
            <p>Vinod Soman</p>
            <p> Founder & Managing Director</p>
          </div>
        </div>
      </section>
      <section id="leader-ship">
        <SectionHeader title={"Leadership"} border="top" />
        <main>
          <div>
            {people.head.map((person) => (
              <Card
                key={person.name}
                title={person.name}
                job={person.title}
                image={person.image}
              />
            ))}
          </div>
          <div className="slider-wrapper">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              className="swiper"
              options={{
                pagination: false,
                arrows: false,
              }}
            >
              {people.stuff.map((person) => (
                <SwiperSlide key={person.name}>
                  <Card
                    customClass="swiper-card"
                    title={person.name}
                    job={person.title}
                    image={person.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </section>
    </div>
  );
}
