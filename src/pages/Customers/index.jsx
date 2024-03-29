import React from 'react';
import { CUSTOMER_PICTURES, CUSTOMER_REVIEW } from './data';
import { head5 } from '../../assets/images';

const Customers = () => {
  return (
    <div className='text-center bg-blue-300'>
        <div>
            <h1 className='pt-24 text-4xl font-light'>What Customers are Saying</h1>
            <p className='py-8 text-2xl text-blue-900'>
             <i>  “ You’ve gone above and beyond! <br />
                Thank you for creating an exceptional tool.”</i>
            </p>
            <div className='flex justify-center gap-12 py-8'> 
               {CUSTOMER_PICTURES.map((data) => {
                    return <img src={data.img_src} key={data.id} alt={data.alt}/>
                })}
            </div>
                <div>
                {CUSTOMER_REVIEW.map((data) => {
                        return <>
                        <div className='p-8 bg-white mb-44 mx-80' key={data.id}>
                            <p>{data.content}</p>
                        </div>
                        </> 
                    })}
                </div>
        </div>
        <div className='relative flex flex-col items-center justify-center mx-auto text-xl bg-white h-72 font-0 text-slate-900'>
            <img src={head5} alt="head_5" className='absolute pb-32 bottom-20'/>
            <p className='text-4xl '>Waiting for your feedback</p>
        </div>
    </div>
  )
}

export default Customers