"use client";
import styles from "./styles.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navbarRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      navbarRef.current,
      {
        opacity: 0,
      },
      {
        delay: 5.5,
        duration: 5,
        opacity: 100,
        ease: "power4.inOut",
      }
    );
  }, []);
  return (
    <div className={styles.navbar} ref={navbarRef}>
      <ul className={styles.navlinksList}>
        <li>
          <p>Services</p>
        </li>
        <li>
          <p>Experience</p>
        </li>
        <li>
          <p>About</p>
        </li>
      </ul>
      <div className={styles.buttonCTA}>
        <p>Book A Call</p>
      </div>
    </div>
  );
}
