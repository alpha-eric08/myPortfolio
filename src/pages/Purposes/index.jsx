import React from 'react'
import { about2 } from '../../assets/images'

const Purposes = () => {
  return (
    <div className='flex bg-gray-200'>
        <div className='w-1/2 pl-52 justify-items-center p-28'>
            <h1 className='text-4xl'>
            What other purposes can I you use this plugin for? <br />
We have some ideas.
            </h1>
            <p className='py-6 pb-10 text-slate-800'>
            You can create regular postfolios by creating new custom post types with image, audio or video thumbnails and lighboxes. Beside this feature the plugin is also suitable for creating portfolios or showcases using your regular blog posts or any other custom post type posts (e.g. WooCommerce). You can also use the plugin to create a post teaser (e.g. Recent posts, Related posts) via inserting the shortcode to a single post page exluding the current item.
            </p>
            <span className='px-6 py-3 border-2 border-black hover:border-0 hover:bg-slate-800 hover:text-white'><a href="#">GET INSPIRED</a></span>
        </div>
        <div className='w-auto h-1/2 pr-52 justify-items-center p-28'>
            <img src={about2} alt="about_2" />
        </div>
    </div>
  )
}

export default Purposes