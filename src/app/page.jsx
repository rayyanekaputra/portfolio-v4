'use client'
import styles from './page.module.css'
import Hero from './components/home/hero/hero'
import Services from './components/home/services/services'
import LocomotiveScroll from 'locomotive-scroll'

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className={styles.main} style={{
      paddingBottom: '600px'

    }}>
      <Hero></Hero>
      <Services></Services>

    </main>
  )
}

export default Home