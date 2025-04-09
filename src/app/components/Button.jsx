"use client";

import useFStore from "@/app/store";
import { useRouter } from "next/navigation";

export default function Button({ children, classes, path }) {
  const { ins, out } = useFStore();
  const router = useRouter();
  const handleClick = () => {
    ins();
    setTimeout(() => {
      if (path) {
        router.push(path);
      }
      out();
    }, 500);
  };

  return (
    <button className={classes} onClick={() => handleClick()}>
      {children}
    </button>
  );
}
