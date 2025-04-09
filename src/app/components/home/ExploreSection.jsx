"use client";
import "../../style/home.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import useFStore from "@/app/store";
import BlockFade from "@/app/components/BlockFade";
gsap.registerPlugin(ScrollTrigger);

export default function ExploreSection() {
  const figure = useRef(null);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const { globalLenis, isLoading } = useFStore();
  useLayoutEffect(() => {
    if (!figure.current) return;
    gsap.to("iframe", {
      scale: 1,
      scrollTrigger: {
        trigger: ".video-wrapper",
        markers: false,
        start: "top center",
        end: "30% center",
        scrub: 1,
        pin: false,
      },
    });
    ScrollTrigger.create({
      // trigger: videoRef.current,
      // onEnter: () => videoRef.current.play(),
      // onEnterBack: () => videoRef.current.play(),
      // onLeave: () => videoRef.current.pause(),
      // onLeaveBack: () => videoRef.current.pause(),
    });
  }, [figure]);

  useEffect(() => {
    if (!buttonRef.current) return;
    if (isLoading) return;
    gsap.to(buttonRef.current, {
      opacity: 1,
      duration: 1,
    });
  }, [buttonRef, isLoading]);

  return (
    <section className="explore">
      <button
        ref={buttonRef}
        className="buf buf-primary__hover opacity-0"
        onClick={() => globalLenis.scrollTo(".reel")}
      >
        Explore
      </button>
      <div className="reel">
        <figure ref={figure} className="video-wrapper">
          <iframe
            style={{ width: "100%" }}
            ref={videoRef}
            allow="autoplay; fullscreen; encrypted-media"
            src="https://player.vimeo.com/video/876814511?autoplay=1&loop=1&autopause=0&controls=0&muted=1"
          />
        </figure>
      </div>
      <BlockFade>
        <p>
          We look to bring our specialist knowledge, experience and fresh
          thinking to create workable solutions in everything we do. Our
          experienced team, commitment to safety and sustainable practices set
          us apart.
        </p>
      </BlockFade>
    </section>
  );
}
