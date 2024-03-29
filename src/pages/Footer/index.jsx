import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 pt-16 text-white bg-blue-600 h-44'>
            <p className='text-4xl font-0 '>Go Portfolio Plugin?</p>
            <div>
                <span className='p-4 px-8 bg-red-600 rounded hover:bg-slate-900'>
                    <a href="#">BUY NOW</a>
                </span> 
            </div>
        </div>
        <div  className='flex justify-around text-white bg-slate-800 h-72 p-14'>
            <div>
                <img className='py-4 pb-4' src="./public/go_white.png" alt="go_white" />
                <p className='w-48 text-red-500 h-44'>Easy to create stunning WordPress Portfolios. This plugin is the ideal solution for creating portfolios, showcases or teasers.</p>
            </div>
            <div>
                <h2 className='py-4 pb-4'>GRANTH NEWSLETTER</h2>
                <p className='text-red-500 w-44 h-44'>Get notified on free product updates and tips.<br/><br/>
                <span className='p-2 text-red-500 border-2 border-red-600 hover:bg-black hover:text-white hover:border-0'><a href="#">SUBSCRIBE NOW</a></span>
                </p>
            </div>
            <div>
                <h1 className='py-4 pb-4'>13K+ WEBSITES POWERED</h1>
                <p className='text-red-500 w-44 h-44'>13,000+ people can not be wrong. Just give a try, we are sure you will never turn back to search more.</p>
            </div>
            <div>
                <h1 className='py-4 pb-4'>SEARCH</h1>
                <p className='text-red-500'>To Search type and hit Enter.</p>
                <input type="Search" />
            </div>
        </div>
        <div className='flex justify-around h-16 pt-6 bg-fixed bg-red-500'>
            <div>
                <p>© Copyright 2020 · Go Portfolio - with from Granth</p>
            </div>
            <div>
                <a href="#"><img src="" alt="" /></a>
                <a href="#"><img src="" alt="" /></a>
                <a href="#"><img src="" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer