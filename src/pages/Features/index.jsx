import React from 'react'
import { about1 } from '../../assets/images'

const Features = () => {
  return (
    <div className=' md:h-screen md:flex pt-36'>
        <div className='pt-4 md:pl-40 md:w-1/2 md:h-1/2 sm:pb-10'>
            <img src={about1} alt="about_1" />
        </div>
        <div className='pr-40 md:w-1/2 sm:pl-44 md:h-1/2'>
            <h1 className='pb-8 text-4xl'>
            Has a lot of features, yet <br />simple?<br />
            Yes.
            </h1>
            <p className='text-slate-600 '>
            This plugin is the ideal solution for creating portfolios, showcases or teasers. You can create new custom post types or use your existing blog posts, custom post type posts or products.
            </p>
            <p className='py-6 text-slate-600'>
            It’s very easy and fast to create stunning portfolios and integrate them into your WordPress site using <span className='text-orange-500 hover:text-black'><a href="#">Admin Panel</a></span>.
            </p>
            <p className='text-slate-600'>
            You will surely find the one most appropriate for you, which can be customized in a few seconds.
            </p>
        </div>
    </div>
  )
}

export default Features