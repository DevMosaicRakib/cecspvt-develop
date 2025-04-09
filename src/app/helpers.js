import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeBlock = (target, tl) => {
  if (!tl) tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: target,
    start: `top 50%`,
    end: `70% 50%`,
    markers: false,
    animation: tl,
  });

  tl.fromTo(
    target,
    {
      y: 20,
      opacity: 0,
      duration: 1,
    },
    {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power4.inOut",
    },
  );
};
