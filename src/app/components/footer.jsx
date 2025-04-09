"use client";

import styles from "./components.module.scss";
import Image from "next/image";
import Link from "next/link";
import useFStore from "@/app/store";
import { useRouter } from "next/navigation";

export default function Footer() {
  const { ins, out } = useFStore();
  const router = useRouter();
  const handleClick = (path) => {
    ins();
    setTimeout(() => {
      if (path) {
        router.push(path);
      }
      out();
    }, 750);
  };

  return (
    <footer className={styles.footer}>
      <figure>
        <Image src="/footer-bg.png" fill alt="" />
      </figure>
      <div>
        <h1>Lets Build.</h1>
        <div>
          <ul>
            <li onClick={() => handleClick("/company")}>Company</li>
            <li onClick={() => handleClick("/services")}>Services</li>
            <li onClick={() => handleClick("/projects")}>Projects</li>
            <li onClick={() => handleClick("/contact")}>Contact us</li>
          </ul>
          <ul>
            <li>CONTACT</li>
            <li>+91 2246048985 / 9867189909</li>
            <li>info@cecsengineer.com</li>
            <li>
              <div className="flex flex-row gap-5 w-fit items-center flex-nowrap">
                <div className="flex flex-col gap-1 font-normal text-xs">
                  <p>ISO 9001:2015</p>
                  <p>Quality Management System</p>
                  <p>Cert No: 305023102548Q</p>
                </div>
                <Image src="/logo-4.png" width={75} height={75} alt="" />
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="">Linkedin</Link>
            </li>
            <li>
              <Link href="">Instagram</Link>
            </li>
            <li>
              <Link href="">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11.5" cy="11.5" r="11" stroke="white" />
              <path
                d="M11.8805 18.216C10.6445 18.216 9.57646 17.946 8.67646 17.406C7.78846 16.854 7.09846 16.092 6.60646 15.12C6.11446 14.136 5.86846 12.996 5.86846 11.7C5.86846 10.416 6.11446 9.288 6.60646 8.316C7.09846 7.332 7.78846 6.564 8.67646 6.012C9.57646 5.46 10.6445 5.184 11.8805 5.184C13.3205 5.184 14.4905 5.532 15.3905 6.228C16.3025 6.912 16.8845 7.872 17.1365 9.108H15.4625C15.2705 8.328 14.8745 7.704 14.2745 7.236C13.6865 6.756 12.8885 6.516 11.8805 6.516C10.9805 6.516 10.1945 6.726 9.52246 7.146C8.85046 7.554 8.32846 8.148 7.95646 8.928C7.59646 9.696 7.41646 10.62 7.41646 11.7C7.41646 12.78 7.59646 13.71 7.95646 14.49C8.32846 15.258 8.85046 15.852 9.52246 16.272C10.1945 16.68 10.9805 16.884 11.8805 16.884C12.8885 16.884 13.6865 16.656 14.2745 16.2C14.8745 15.732 15.2705 15.114 15.4625 14.346H17.1365C16.8845 15.558 16.3025 16.506 15.3905 17.19C14.4905 17.874 13.3205 18.216 11.8805 18.216Z"
                fill="white"
              />
            </svg>
          </span>
          2023 CECS Engineers Pvt. Ltd GSTIN 27AAKCC6904A1ZX
        </p>
        <ul>
          <li onClick={() => handleClick("/privacy")}>Privacy</li>
          <li onClick={() => handleClick("/sustainability")}>Sustainability</li>
          <li onClick={() => handleClick("safety")}>Safety & Health</li>
        </ul>
      </div>
    </footer>
  );
}
