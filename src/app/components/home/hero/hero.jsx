"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  //ref for texts
  const bioText = useRef(null);
  const descText = useRef(null);
  const ctaText = useRef(null);

  //ref for sliders
  const firstList = useRef(null);
  const secondList = useRef(null);
  const slider = useRef(null);
  const textWeb = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    if (typeof window !== "undefined") {
      requestAnimationFrame(animation);
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();

      timeline
        .to(slider.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            scrub: 0.25,
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x:'-500px'
        })
        .to([slider.current, textWeb.current], {
          duration: 2.5,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power1.inOut",
        })
        .to(
          bioText.current,
          {
            duration: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power1.inOut",
          },
          1
        )
        .to(
          descText.current,
          {
            duration: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power1.inOut",
          },
          1
        )
        .to(
          ctaText.current,
          {
            duration: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power1.inOut",
          },
          1
        );
    }
  }, []);
  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstList.current, {
      xPercent: xPercent,
    });
    gsap.set(secondList.current, {
      xPercent: xPercent,
    });
    requestAnimationFrame(animation);
    xPercent += 0.01 * direction;
  };
  return (
    <div className={styles.hero}>
      <div className={styles.upperColumn}>
        <div
          ref={bioText}
          data-scroll
          data-scroll-speed="0.2"
          className={styles.textWrapper}
        >
          <div className={styles.profilePicture}>
            <Image
              src={"/images/pp rayyan.jpg"}
              fill={true}
              alt="profile picture rayyan"
            />
          </div>
          <p className={styles.mainParagraph}>
            Rayyan is a web designer,{" "}
            <span className={styles.bolderText}>
              combining the skills of a designer and a developer
            </span>
            .
          </p>
        </div>
        <div
          ref={ctaText}
          data-scroll
          data-scroll-speed="0.05"
          className={styles.textWrapper}
        >
          <p className={styles.mainParagraph}>Know more about him.</p>
        </div>
      </div>
      <div className={styles.midColumn}>
        <h1 ref={textWeb} className={styles.webText}>
          WEB
        </h1>
        <div ref={descText} className={styles.textWrapper}>
          <p className={styles.mainParagraph}>
            He is known for his web designs, animations, and interactions,
            utilizing his React expertise to implement prototypes.
          </p>
        </div>
      </div>
      <div className={styles.lowColumn}>
        <div  ref={slider} className={styles.slider}>
          <div ref={firstList} className={styles.sliderList}>
            <h1>DESIGNER</h1>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.047 144.74L54.7868 106H0V76H54.7868L16.047 37.2602L37.2602 16.047L75.567 54.3538V0H105.567V55.2198L144.74 16.0463L165.954 37.2595L127.213 76H182V106H127.213L165.954 144.74L144.74 165.954L105.567 126.78V182H75.567V127.646L37.2602 165.953L16.047 144.74Z"
                  fill="#FF4D00"
                />
              </svg>
            </div>
            <h1>DEVELOPER</h1>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.047 144.74L54.7868 106H0V76H54.7868L16.047 37.2602L37.2602 16.047L75.567 54.3538V0H105.567V55.2198L144.74 16.0463L165.954 37.2595L127.213 76H182V106H127.213L165.954 144.74L144.74 165.954L105.567 126.78V182H75.567V127.646L37.2602 165.953L16.047 144.74Z"
                  fill="#FF4D00"
                />
              </svg>
            </div>
          </div>
          <div ref={secondList} className={styles.sliderList}>
            <h1>DESIGNER</h1>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.047 144.74L54.7868 106H0V76H54.7868L16.047 37.2602L37.2602 16.047L75.567 54.3538V0H105.567V55.2198L144.74 16.0463L165.954 37.2595L127.213 76H182V106H127.213L165.954 144.74L144.74 165.954L105.567 126.78V182H75.567V127.646L37.2602 165.953L16.047 144.74Z"
                  fill="#FF4D00"
                />
              </svg>
            </div>
            <h1>DEVELOPER</h1>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.047 144.74L54.7868 106H0V76H54.7868L16.047 37.2602L37.2602 16.047L75.567 54.3538V0H105.567V55.2198L144.74 16.0463L165.954 37.2595L127.213 76H182V106H127.213L165.954 144.74L144.74 165.954L105.567 126.78V182H75.567V127.646L37.2602 165.953L16.047 144.74Z"
                  fill="#FF4D00"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
