"use client";
import styles from "./styles.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const textRef = useRef();
  useEffect(() => {
    const timeline = gsap.timeline()
    const textElement = textRef.current
      timeline
        .delay(6)
        gsap.fromTo(
          textElement,
          { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: textElement,
              start: 'top 80%', // Start animation when the top of the element hits 80% of the viewport height
              end: 'top 30%', // End animation when the top of the element hits 30% of the viewport height
              scrub: true, // Smooth scrubbing effect
              toggleActions: 'play none none reverse', // Play animation on scroll down, reverse on scroll up
            },
          }
        );   
      }, []);

  
  
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.topRow}>
        <h2>About</h2>
        <div className={styles.seeMore}>
          <p className={styles.seeMoreText}>See More</p>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.33333 14.9993L13.3333 6.99935V14.166H15V4.16602H5V5.83268H12.1667L4.16667 13.8327L5.33333 14.9993Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* TODO: */}
      {/* https://blog.olivierlarose.com/tutorials/text-gradient-scroll-opacity-v2 */}
      {/* https://gsap.com/community/forums/topic/36430-pin-sections-in-one-place-without-scrub-or-layer/ */}
      {/*https://gsap.com/community/forums/topic/27480-animating-text-with-a-gradient-on-scroll/  */}
      <div className={styles.bottomRow}>
        <h3 className={styles.aboutHeader} ref={textRef}>
          Rayyan is a versatile web designer and developer, passionate about
          creating websites that are fluid, fun, and highly engaging. His
          designs not only captivate users but also drive high engagement and
          conversion rates, helping his clients' products stand out.
        </h3>
      </div>
    </div>
  );
}
