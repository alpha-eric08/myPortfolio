import React from 'react'
import { about3 } from '../../assets/images'

const System = () => {
  return (
    <div className='flex py-28'>
        <div className='w-1/2 pl-28 mt-9'>
            <img className='w-auto h-auto' src= {about3} alt="about_3" />
        </div>
        <div className='w-1/2 h-auto pr-40'>
            <h1 className='py-6 text-4xl'>Is the sytem flexible? <br /> Yes.</h1>
             
             <p className=' text-slate-800'>Flexible, percent based grid system with customizable vertical and horizontal spaces up to 10 columns. You can create optionally filterable grid and slider layouts with optional and customizable responsivity.</p>

             <p className='py-5 text-slate-800'>You have a lot of query settings to show the posts, modifying the limit and order of the posts, filtering by taxonomies or terms.</p>

            <p className=' text-slate-800'>Modify or add new templates and styles globally and per portfolio with the built-in editor. Select the thumbnail image size for thumbnails and lighboxes, choose any of your existing ones.</p>
        </div>
    </div>
  )
}

export default System