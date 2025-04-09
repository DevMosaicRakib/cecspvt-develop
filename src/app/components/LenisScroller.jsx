"use client";
import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useFStore from "@/app/store";

export default function Lenify() {
  const { globalLenis, setLenis } = useFStore();
  const lenis = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis();
    setLenis(lenis.current);

    const resize = setInterval(() => {
      lenis.current.resize();
    }, 150);
    function onFrame(time) {
      lenis.current.raf(time);
    }
    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current.destroy();
      lenis.current = null;
      setLenis(null);
    };
  }, []);
  return null;
}
