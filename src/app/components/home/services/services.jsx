'use client'
import styles from "./styles.module.css";
import services_list from "./data/services_obj"
import Image from "next/image";


export default function Services() {

    return(
        <div className={styles.services}>
            <div className={styles.topRow}>
                <h2>Services</h2>
                <div className={styles.seeMore}>
                    <p className={styles.seeMoreText}>See More</p>
                    <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.33333 14.9993L13.3333 6.99935V14.166H15V4.16602H5V5.83268H12.1667L4.16667 13.8327L5.33333 14.9993Z" fill="black"/>
</svg>
                    </div>
                    
                </div>
            </div>
            <div>
                <ul className={styles.bottomRow}>

                {services_list.map(({title, description}, index)=>(
                    <li data-scroll data-scroll-speed='0.1' className={styles.listServices}>
                        <div className={styles.lisServiceItemTop}>
                         <h2>{title}</h2>
                         <div className={styles.iconServiceItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.33333 14.9993L13.3333 6.99935V14.166H15V4.16602H5V5.83268H12.1667L4.16667 13.8327L5.33333 14.9993Z" fill="white"/>
</svg>
                    </div>
                         </div>
                            
                        <p>{description}</p>
                     </li>
                ))}
                </ul>
            </div>
        </div>

    )

}