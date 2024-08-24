"use client";
import dynamic from "next/dynamic";

import styles from "./page.module.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

// Dynamically import components with SSR disabled
const Hero = dynamic(() => import("./components/home/hero/hero"), {
  ssr: false,
});
const Services = dynamic(() => import("./components/home/services/services"), {
  ssr: false,
});
const Splash = dynamic(() => import("./components/splash/splash"), {
  ssr: false,
});
const Navbar = dynamic(() => import("./components/navbar/navbar"), {
  ssr: false,
});

const Home = () => {

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll();
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

export default Home;
