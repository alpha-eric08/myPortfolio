import React from 'react'
import { siteanimated } from '../assets/images'
const Hero = () => {
  return (
    <div style={{
        width: 'full',
        height: '400px',
        backgroundImage: `url(${siteanimated})`
    }} className='text-center text-white'>
        <h1 className='p-8 text-4xl'>Welcome</h1>
        <p className=''>
            If you would like to create a portfolio or looking for a complete solution
            managing portfolios, this product is a useful tool for you.
        </p>
        <p>
           For more information you may scroll down.
        </p>
    </div>
  )
}

export default Hero