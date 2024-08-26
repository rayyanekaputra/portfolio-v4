"use client";
import styles from "./styles.module.css";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Splash() {
  const splashRef = useRef(null);
  useEffect(() => {
    gsap.to(splashRef.current, {
      delay: 5,
      duration: 1,
      clipPath: "inset(100% 0% 0% 0%)",
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className={styles.splash} ref={splashRef}>
      <h1 className={styles.splashText}>
        {/* https://github.com/tameemsafi/typewriterjs/tree/main */}
        <Typewriter
          options={{
            wrapperClassName: `${styles.splashText}`,
            delay: 75,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("HELLO, I'M RAYYAN")
              .pauseFor(1200)
              .changeDelay(800)
              .typeString(":)")
              .pauseFor(1200)
              .deleteAll(50)
              .start();
          }}
        />
      </h1>
    </div>
  );
}
