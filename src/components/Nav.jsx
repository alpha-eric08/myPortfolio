import React from 'react'
import { goLogo } from '../assets/images'
import Key from '../pages/Key'

const Nav = () => {
  return (
    <div className='sticky top-0 flex justify-around h-24 bg-white shadow-xl'>
        <div className='pt-6'>
            <a href="#"><img src={goLogo} alt="go-logo" /></a>
        </div>
        <div>
            <ul className='flex pt-8 uppercase gap-7'>
                <li>
                    <a href='#'>Features</a>
                </li>
                <li>
                    <a href="#">Samples</a>
                </li>
                <li>
                    <a href="#">More</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav