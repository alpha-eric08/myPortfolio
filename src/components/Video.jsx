import React from 'react';
import { not, sucessDriver, webTech } from '../assets/images';
import { ImCheckmark } from "react-icons/im";

const Video = () => {
  return (
    <div >
      <div className='h-screen p-16'>
        {/* Video Title */}
        <div className='py-5 pl-24'>
            <h1 className='text-5xl font-medium'>Video Tutorials</h1>
            <p className='text-2xl text-slate-600'>Easy Admin settings</p>
        </div>
        {/* Video Cards */}
        <div className='flex items-center justify-center max-w-6xl gap-10 m-auto my-5'>
            <div className='overflow-hidden shadow-lg w-96 h-80'>
                <div className='h-60 w-[450px] overflow-hidden m-auto relative'>
                    <div className='absolute top-0 w-full h-full bg-orange-400 cursor-pointer hover:hidden'>
                    </div>
                <img src={sucessDriver} alt="image-1" className='w-full' />
                </div>
                <p className='p-5 text-xl'>Create a Portfolio</p>
            </div>
            <div className='overflow-hidden shadow-lg w-96 h-80'>
                <div className='h-60 w-[450px] overflow-hidden m-auto relative'>
                    <div className='absolute top-0 w-full h-full bg-orange-400 cursor-pointer hover:hidden'>
                    </div>
                <img src={webTech} alt="image-2" className='w-full' />
                </div>
                <p className='p-5 text-xl'>Install the Plugin</p>
            </div>
            <div className='overflow-hidden shadow-lg w-96 h-80'>
                <div className='h-60 w-[450px] overflow-hidden m-auto relative'>
                    <div className='absolute top-0 w-full h-full bg-orange-400 cursor-pointer hover:hidden'>
                    </div>
                <img src={not} alt="image-3" className='w-full' />
                </div>
                <p className='p-5 text-xl'>Import Demo Data</p>
            </div>
        </div>
        <div>
            
        </div>
      </div>
      <div className='flex py-24 text-lg px-11'>
        <div>
          <h1 className='text-5xl font-normal text-slate-700'>What is this good <br /> for?</h1>
        </div>
        <div>
          <ul className='px-20 text-slate-700'>
            <li className='flex gap-1'><ImCheckmark />Filterable & Slider Portfolio</li>
            <li className='flex gap-1'><ImCheckmark />Showcase of posts and any custom post <br /> types</li>
          </ul>
        </div>
        <div>
          <ul className=' text-slate-700'>
            <li className='flex gap-1'><ImCheckmark />    WooCommerce product showcase</li>
            <li className='flex gap-1'><ImCheckmark />Teasers (e.g. Recents or Related posts)</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center py-20 mx-auto bg-blue-600 mt-60 h-36'>
        <img className='mb-56 ml-32 h-96 w-96' src="src/assets/images/mobile.png" alt=" mobile" />
        <img className='' src="src/assets/images/qr.png" alt="qr" />
      </div>
    </div>
  )
}

export default Video