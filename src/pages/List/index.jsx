import React from 'react';
import { ImCheckmark } from "react-icons/im";

const List = () => {
  return (
    <div>
        <div className='pl-32  pb-28 bg-cyan-100'>
            <h1 className='text-4xl text-center pt-28 pr-44 text-slate-700'>Full list of Features</h1>
            <ul className='text-xl pt-11 text-slate-800 '>
                <li  className='flex gap-1'><ImCheckmark /> Compatible with Visual Composer <span className='px-2 text-white uppercase bg-blue-500 rounded'>new</span> <span className='px-2 text-white uppercase bg-red-500 rounded'>HOT</span></li>
                <li className='flex gap-1'><ImCheckmark />Supports pages <span className='px-2 text-white uppercase bg-blue-500 rounded'>NEW</span></li>
                <li className='flex gap-1'><ImCheckmark />2 Filtering types (classic isotope and opacity change)<span className='px-2 text-white uppercase bg-blue-500 rounded'>NEW</span></li>
                <li className='flex gap-1'><ImCheckmark /> 4 default styles (<a href="#" className='text-red-500 hover:text-black'>FLEX</a>, <a href="#" className='text-red-500 hover:text-black'>DOOR</a>, <a href="#" className='text-red-500 hover:text-black'>VARIO</a>, <a href="#" className='text-red-500 hover:text-black'>DELUX</a> )</li>
                <li className='flex gap-1'><ImCheckmark />Reponsive grid layout or horizontally slider layout (up to 10 columns)</li>
                <li className='flex gap-1'><ImCheckmark />Flexible, percent based grid system with customizable vertical and horizontal spaces</li>
                <li className='flex gap-1'><ImCheckmark />Optional responsivity with custom settings</li>
                <li className='flex gap-1'><ImCheckmark />Huge <span className='text-red-500 hover:text-black'><a href="#">Admin Panel</a></span> with tons of options</li>
                <li className='flex gap-1'><ImCheckmark />Unlimited portfolios</li>
                <li className='flex gap-1'><ImCheckmark />Unlimited custom post types</li>
                <li className='flex gap-1'><ImCheckmark />Works with your existing custom post types and regular blog posts</li>
                <li className='flex gap-1'><ImCheckmark />WooCommerce support – Product showcase</li>
                <li className='flex gap-1'><ImCheckmark />Advanced post query options to show posts, setting the limit and order of the posts, filtering by taxonomies and terms</li>
                <li className='flex gap-1'><ImCheckmark />Different thumbnail and lightbox types:</li>
                <li className='flex gap-1 pl-6'><ImCheckmark />Image (JPG, PNG, GIF)</li>
                <li className='flex gap-1 pl-6'><ImCheckmark />Video (Vimeo, Youtube, Screenr, Dailymotion, Metacafe)</li>
                <li className='flex gap-1 pl-6'><ImCheckmark />Audio (Soundcloud, Mixcloud, Beatport)</li>
                <li className='flex gap-1'><ImCheckmark />Thumbnail and lightbox image size selecting options using your existing images</li>
                <li className='flex gap-1'><ImCheckmark />Thumbnail aspect ratio settings option to use the their default aspect ratio or a custom one</li>
                <li className='flex gap-1'><ImCheckmark />Built-in Template & Style editor with adding, editing, importing options</li>
                <li className='flex gap-1'><ImCheckmark />System and Google Web Font (650+ fonts) support</li>
                <li className='flex gap-1'><ImCheckmark />Translation ready with .mo .po files</li>
                <li className='flex gap-1'><ImCheckmark />Advanced Import & Export settings</li>
                <li className='flex gap-1'><ImCheckmark />Supports all modern browsers</li>
                <li className='flex gap-1'><ImCheckmark />Compatible with the latest WordPress version</li>
            </ul>
        </div>
    </div>
  )
}

export default List