import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Hero from '../Components/hero'
import Navbar from '../Components/navbar'
import ProductCaregory from '../Components/ProductCaregory'
import ProductDetails from '../Components/ProductDetails'
import Test from '../Components/test'
import styles from '../styles/Home.module.css'
import Product from './product'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <ProductCaregory />
      {/* <Product />
      <ProductDetails /> */}
      <Footer />
      {/* <Test/> */}
    </div>
  )
}

