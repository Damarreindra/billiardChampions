import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import Menu from '../components/Menu'
import { motion } from 'framer-motion'


function Home() {
  return (
  <Layout>
    <img src="../images/logo.png" alt="" 
    className='w-80 md:w-auto mx-auto'
    />
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.3 }}
    >
  <Carousel/>
    <Menu/>
    </motion.div>
  
  </Layout>
  )
}

export default Home