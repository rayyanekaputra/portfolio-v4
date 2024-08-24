"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import gsap from "gsap";


export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <ul className={styles.navlinksList}>
                <li>Services</li>
                <li>Experience</li>
                <li>About</li>
            </ul>
            <div className={styles.buttonCTA}>
                <p>Book A Call</p>
            </div>
        </div>
    )
}