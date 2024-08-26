"use client";
import styles from "./styles.module.css";
import Typewriter from 'typewriter-effect/dist/core';

import { useEffect, useRef } from "react";

export default function Splash() {
    const messageSplash = "Hello, I'm Rayyan!"
    const splitMessageSplash =  messageSplash.split(" ")
    const splashTextContainer = useRef(null);

    useEffect(()=>{
        const typewriter = new Typewriter(splashTextContainer.current, {
            strings: "Hello, I'm Rayyan!",
            autoStart: true,
            loop: true

        });
        
    },[])
    return(
        <div className={styles.splash} >
           <h1 className={styles.splashText} ref={splashTextContainer}/>
        </div>
    )
}