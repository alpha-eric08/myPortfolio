import React from 'react'
import { ImCheckmark } from "react-icons/im";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Key = () => {
  return (
    <div className='bg-white pt-28 pb-28'>
      <div>
        <span className='text-center '>
          <h1 className='text-4xl font-light text-black'>Key Features</h1>
          <p className='py-6 text-2xl text-slate-600'>It is a true peculiarity made for you with lots of love.</p>
        </span>
        <div>
          <div className='flex '>
            <div className='w-1/2 px-24 pl-44'>
              <h1 className='flex py-4 text-xl text-slate-900'><IoIosCheckmarkCircleOutline />Retina Display Ready</h1>
              <p className='text-slate-800'><span className='font-bold text-slate-700 '>Retina and other HiDPI display</span>support for crystal clear appearance. More detailed images on the screen.</p>
            </div>
            <div className='w-1/2 px-24 pr-36'>
              <h1 className='flex py-4 text-xl text-slate-900'><IoIosCheckmarkCircleOutline />650+ Google Web Fonts</h1>
              <p className='text-slate-800'><span className='font-bold text-slate-700 '>Google font support </span>to implement the desired font on your site. Currently more than 650 font families are available.</p>
            </div>
          </div>
          <div className='flex justify-around'>
            <div className='w-1/2 px-24 pl-44'>
              <h1 className='flex py-4 text-xl text-slate-900'><IoIosCheckmarkCircleOutline />Unlimited Colors</h1>
              <p className='text-slate-800'><span className='font-bold text-slate-700 '>Unlimited colors option</span>, Template and Style editor for the possibility to create unique showcases in minutes.</p>
            </div>
            <div className='w-1/2 px-24 pr-40'>
              <h1 className='flex py-4 text-xl text-slate-950'><IoIosCheckmarkCircleOutline />Save Your Time</h1>
              <p className='text-md text-slate-800'><span className='font-bold text-slate-700 '>Lots of tools</span> (Import, Export, Clone) to create awesome portfolios in minutes.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-2xl text-center py-11 text-slate-600'>Some of customizable features.</h1>
        <div>
          <div className='flex'>
            <ul className='w-1/2 px-24 pl-44 text-slate-800'>
            <li  className='flex gap-1'><ImCheckmark /> Grid and slider layout</li>
              <li  className='flex gap-1'><ImCheckmark />Vertical and horizontal space between posts</li>
              <li  className='flex gap-1'><ImCheckmark />Optional filterability</li>
              <li  className='flex gap-1'><ImCheckmark />Post title length limit</li>
              <li  className='flex gap-1'><ImCheckmark />Post excerpt source (content, excerpt)</li>
              <li  className='flex gap-1'><ImCheckmark />Post excerpt word limit</li>
              <li  className='flex gap-1'><ImCheckmark />Image, audio & video thumbnails</li>
            <li  className='flex gap-1'><ImCheckmark />Default or custom thumbnail aspect ratio</li>
            </ul>
            <ul className='w-1/2 px-24 pr-36 text-slate-800'>
              <li  className='flex gap-1'><ImCheckmark />Unlimited colors</li>
              <li  className='flex gap-1'><ImCheckmark />Font family and size</li>
              <li  className='flex gap-1'><ImCheckmark />Border radius</li>
              <li  className='flex gap-1'><ImCheckmark />Box shadows (blur, spread and opacity)</li>
              <li  className='flex gap-1'><ImCheckmark />Overlay (color, opacity, etc)</li>
              <li  className='flex gap-1'><ImCheckmark />Lightbox options</li>
              <li  className='flex gap-1'><ImCheckmark />And much more…</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Key