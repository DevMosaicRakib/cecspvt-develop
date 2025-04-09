import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeBlock } from "@/app/helpers";

gsap.registerPlugin(ScrollTrigger);

export default function BlockFade({ children }) {
  useLayoutEffect(() => {
    fadeBlock(".block-fade");
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return React.cloneElement(children, {
    className: `${
      children.props.className !== undefined ? children.props.className : ""
    } block-fade`,
  });
}
