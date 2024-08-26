'use client'

import styles from "./page.module.css";
import { useEffect } from "react";
import Hero from "./components/home/hero/hero";
import Services from "./components/home/services/services";
import Splash from "./components/splash/splash";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      console.log('WINDOWNYA IS UNREADABLE')
    } else{
      //dynamic import to fix the window issue
      const importLocomotiveScroll = async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      };

      importLocomotiveScroll();
      console.log('WINDOW EXISTED')
    }
      
  }, []);


  
  return (
    <main
      className={styles.main}
      style={{
        paddingBottom: "600px",
      }}
    >
      <Navbar></Navbar>
      <Splash></Splash>
      <Hero></Hero>
      <Services></Services>
    </main>
  );
};
