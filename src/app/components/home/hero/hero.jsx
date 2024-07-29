"use client";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.upperColumn}>
        <div className={styles.profilePicture}>
          <Image
            src={"/images/pp rayyan.jpg"}
            fill={true}
            alt="profile picture rayyan"
          />
        </div>
        <p className={styles.mainParagraph}>
          Rayyan is a web designer, combining the skills of a designer and a
          developer.
        </p>
        <p className={styles.mainParagraph}>Know more about him.</p>
      </div>
      <div className={styles.midColumn}>
        <h1>WEB</h1>
        <p className={styles.mainParagraph}>
          He is known for his web designs, animations, and interactions,
          utilizing his React expertise to implement prototypes.
        </p>
      </div>
      <div className={styles.lowColumn}>
        <div className={styles.sliderList}>
          <h1>DESIGNER</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.047 144.74L54.7868 106H0V76H54.7868L16.047 37.2602L37.2602 16.047L75.567 54.3538V0H105.567V55.2198L144.74 16.0463L165.954 37.2595L127.213 76H182V106H127.213L165.954 144.74L144.74 165.954L105.567 126.78V182H75.567V127.646L37.2602 165.953L16.047 144.74Z" fill="#FF4D00"/>
</svg>
          <h1>DEVELOPER</h1>
        </div>
      </div>
    </div>
  );
}
