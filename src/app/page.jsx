'use client'
import {useEffect} from 'react'
import styles from './page.module.css'
import Hero from './components/home/hero/hero'

const Home = () => {

  useEffect(()=>{
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll
      }
    )
  })



  return (
    <main className={styles.main}>
      <Hero></Hero>
    </main>
  )
}

export default Home