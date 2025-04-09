"use client";

import styles from "./components.module.scss";
import { gsap } from "gsap";

import { useEffect, useRef, useState } from "react";
import useFStore from "@/app/store";

export default function Loader() {
  const counter = useRef(null);
  const wrapper = useRef(null);

  const { isLoading, setIsLoading } = useFStore();
  useEffect(() => {
    let count = 0;
    const tl = gsap.timeline();
    if (
      !isLoading ||
      typeof window === "undefined" ||
      typeof document === "undefined"
    )
      return;
    document.documentElement.style.overflow = "hidden";
    const interval = setInterval(() => {
      if (count < 100) {
        count++;
        counter.current.textContent = count.toString().padStart(2, "0");
      } else {
        clearInterval(interval);
        tl.to(".loaderEl", {
          opacity: 0,
        }).to(wrapper.current, {
          duration: 1.2,
          ease: "Power4.easeInOut",
          scaleY: 0,
          onComplete: () => {
            document.documentElement.style.overflow = "unset";
            setIsLoading(false);
          },
        });
      }
    }, 20);
  }, [isLoading, setIsLoading]);
  return (
    <div ref={wrapper} className={styles.loader}>
      <div className={styles.loaderContainer}>
        <div className="loaderEl">
          <span ref={counter}>00</span>
          <span>%</span>
        </div>
      </div>
      <div className={styles.subLoader}></div>
    </div>
  );
}
