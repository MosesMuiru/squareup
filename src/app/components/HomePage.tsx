import React from 'react'
import Image from 'next/image'
import { barlow } from '../layout'
type Props = {}

function HomePage({}: Props) {
  return (
    <div className=" gap-10 text-white bg-red min-h-[80vh] flex flex-col items-center justify-center">
       <h1 className={`${barlow.className} text-[48px]  w-1/2 text-center font-bold`}>A Digital Product Studio that will Work</h1>


    {/* buttons set up */}

    <div className='flex  items-center justify-center gap-2 my-4'>
      <p className='text-[#98989A]'>For</p>
      <button className='bg-[#262626] py-3 px-2 rounded-md'>Startups</button>,
      <button className='bg-[#262626] py-3 px-2 rounded-md'>Enterprise Leaders</button>,
      <button className='bg-[#262626] py-3 px-2 rounded-md'>Media & Publishers</button>,
      <button className='bg-[#262626] py-3 px-2 rounded-md'>Social Good</button>
    </div>

    <div className='flex gap-4'>
        {/* workds and contact ups */}
        <button className=' py-3 px-4 text-white border border-white bg-[#262626] rounded-md'>Our Works</button>
        <button className='text-black py-3 px-4 bg-[#9EFF00] rounded-md'>Contact Us</button>
    </div>
    </div>
  )
}

export default HomePage