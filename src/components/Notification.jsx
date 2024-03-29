import React from 'react'

const notification = () => {
  return (
    <div className='sticky top-0 flex justify-center gap-2 pt-4 text-white h-14 bg-violet-600'>
       <p>
        Buy now and get 30% off! Hurry, only available for a few days! 🎉
       </p>
       <div>
        <a href="#"> <span className='px-2 py-1 text-white bg-pink-700 border rounded-full hover:animate-bounce'>BUY NOW</span> </a>
       </div>
    </div>
  )
}

export default notification