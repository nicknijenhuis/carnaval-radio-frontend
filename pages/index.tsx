import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      

      <main>
        <Hero />
      </main>

      <footer className={styles.footer}>
         
      </footer>
    </Layout>
  )
}
