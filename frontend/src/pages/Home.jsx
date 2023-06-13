import React from 'react'
import Navbar from '../components/Navbar'
import Stars from '../components/particles'
import './home.css'

const Home = () => {
  return (
    <>
    <Stars/>
    <div className='home flex flex-col items-center'> 
      <Navbar/>
      <div className='w-5/6 flex flex-col items-center justify-center h-[85vh]'>
        <h1 className='text-6xl text-center font-bold text-white'>Unleash Your Student  <br/>
          <span className='text-primary-100'>N</span>
          <span className='text-primary-200'>e</span>
          <span className='text-primary-300'>t</span>
          <span className='text-primary-400'>w</span>
          <span className='text-primary-500'>o</span>
          <span className='text-primary-500'>r</span>
          <span className='text-primary-500'>k</span>
        </h1>
        <p className='mt-5 w-3/6 font-light text-xl text-center'>Embark on a journey of self-discovery, finding lifelong friends and creating memories that will last a lifetime</p>
      </div>
    </div>

    </>
  )
}

export default Home