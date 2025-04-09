"use client";

import styles from "./components.module.scss";
import useFStore from "@/app/store";
import { useEffect, useRef } from "react";

export default function PageTransition() {
  const ref = useRef();
  const { setOverlayElement } = useFStore();
  useEffect(() => {
    if (ref.current) setOverlayElement(ref.current);
  }, [ref, setOverlayElement]);
  return (
    <div ref={ref} className={styles.pageOverlay}>
      <div className="layer-1"></div>
      <div className="layer-2"></div>
    </div>
  );
}
