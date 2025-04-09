"use client";
import styles from "./components.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import useFStore from "@/app/store";

export default function Header() {
  const { ins, out, globalLenis } = useFStore();
  // const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const ulRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (globalLenis) {
      globalLenis.on("scroll", (e) => {
        if (e.direction === 1) {
          headerRef.current.classList.add("down");
          if (window.innerWidth < 768) {
            ulRef.current.classList.add("hidden");
          }
        } else {
          headerRef.current.classList.remove("down");
        }
      });
    }
  }, [globalLenis]);

  const handleClick = (path) => {
    ulRef.current.classList.add("hidden");
  
    ins();
    setTimeout(() => {
      if (path) {
        router.push(path);
      }
      out();
    }, 200);
  };

  return (
    <>
      <header id="header" ref={headerRef}>
        <nav className={styles.header}>
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <div onClick={() => handleClick("/")} className="flex items-center">
              <img src="/logo.svg" alt="Flowbite Logo" />
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hiddenfocus:outline-none"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                ulRef.current.classList.toggle("hidden");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              ref={ulRef}
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul>
                <li
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    pathname === "/company" ? styles.active : undefined
                  }`}
                  aria-current="page"
                  onClick={() => handleClick("/company")}
                >
                  Company
                </li>
                <li
                  onClick={() => handleClick("/projects")}
                  className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                    pathname === "/projects" ? styles.active : undefined
                  }`}
                >
                  Projects
                </li>
                <li
                  onClick={() => handleClick("/services")}
                  className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                    pathname === "/services" ? styles.active : undefined
                  }`}
                >
                  Services
                </li>
                <li
                  onClick={() => handleClick("/contact")}
                  className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                    pathname === "/contact" ? styles.active : undefined
                  }`}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {pathname !== "/" && !pathname.includes("/projects") && (
        <div className={styles.subheader}>
          <h1>{pathname.slice(1)}</h1>
        </div>
      )}
    </>
  );
}
