"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFStore from "@/app/store";
import { useLayoutEffect, useRef } from "react";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);
export default function TextFade({ children, trigger }) {
  const { isLoading } = useFStore();
  const ref = useRef();

  useLayoutEffect(() => {
    Splitting({ target: ref.current, by: "chars" });
    if (typeof window === "undefined" || isLoading || !document) return; // Exit early if on server or loading
    const tl = gsap.timeline();
    if (trigger && document) {
      ScrollTrigger.create({
        trigger: ref.current,
        start: `top 50%`,
        end: `top bottom`,
        markers: false,
        animation: tl,
      });
      // ScrollTrigger.refresh();
    }
    tl.fromTo(
      gsap.utils.toArray(ref.current.querySelectorAll("[data-char]")),
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        ease: "power3.out",
      },
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      tl.kill();
    };
  }, [isLoading, trigger, ref]);

  return (
    <div ref={ref} id="text-fade">
      {children}
    </div>
  );
}
