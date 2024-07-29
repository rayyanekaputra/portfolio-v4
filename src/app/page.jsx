'use client'
import {useEffect} from 'react'
import styles from './page.module.css'
import Hero from './components/home/hero/hero'
import LocomotiveScroll from 'locomotive-scroll'

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <Hero></Hero>

    </main>
  )
}

export default Home