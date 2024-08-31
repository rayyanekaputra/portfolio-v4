"use client";
import styles from "./styles.module.css";
import services_list from "./data/services_obj";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Services() {
  //https://codesandbox.io/p/sandbox/musicapp-with-react-and-gsap-forked-csqtx?file=%2Fsrc%2FTest.js%3A24%2C20-24%2C33
  //https://gsap.com/community/forums/topic/27012-scrolltrigger-and-array-of-refs-in-react/
  const bottomRowRef = useRef();
  const topRowRef = useRef();
  useEffect(() => {
    const listServices = bottomRowRef.current.querySelectorAll(`.${styles.listServices}`);
    const headerServices = topRowRef.current //tidak perlu querySelectorAll karena cuman menunjuk dirinya sendiri. Nodelistnya kosong. Nodelist itu koleksi DOM
    const timeline = gsap.timeline();

      timeline
        .delay(6)
        .from([headerServices,...listServices], {
          opacity: 0,
        })        
        .to(headerServices, {
          duration: 2,
          opacity: 1,
          ease: "power1.inOut"
        })
        .to(listServices, {
          duration: 1,
          opacity: 1,
          stagger: 0.5,
          ease: "power1.inOut"
        })        
      }, []);

  return (
    <div className={styles.services}>
      <div className={styles.topRow} ref={topRowRef}>
        <h2>Services</h2>
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
      <div>
        <ul className={styles.bottomRow} ref={bottomRowRef}>
          {services_list.map(({ title, description }, index) => (
            <li
              key={index}
              data-scroll
              data-scroll-speed="0.1"
              className={styles.listServices}
            >
              <div className={styles.lisServiceItemTop}>
                <h2>{title}</h2>
                <div className={styles.iconServiceItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.33333 14.9993L13.3333 6.99935V14.166H15V4.16602H5V5.83268H12.1667L4.16667 13.8327L5.33333 14.9993Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
