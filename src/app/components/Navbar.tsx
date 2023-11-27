"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
type Props = {}


function Navbar({}: Props) {
  const [bg, setbg] = useState<boolean>(true)
  
  const setActiveLink = () =>  bg ? "bg-[#262626] py-3 px-4 rounded-md" : ""
  console.log(bg)


  return (
    <nav className='flex items-center justify-between py-4 px-5 border-b-[0.5px] border-white'>
       <div className='flex gap-6'>
        
        {/* logo */}
        <Image
            src="/Logo.svg"
            width={50}
            height={50}
            alt='logo'
         />
         <h1 className=' font-extrabold text-[2rem] text-white'>SquareUp</h1>

     

        </div>


        <div>
            <ul className='flex gap-5 text-white  items-center justify-center  font-[500]'>
                <li onClick={
                  () => {
                    setbg(false)
                  }
                } className='bg-[#262626] py-3 px-4 rounded-md'>Home</li>
                <li className= {`cursor-pointer ${bg}`}>Services</li>
                <li className= {`cursor-pointer`}>Work</li>
                <li className= {`cursor-pointer`}>Process</li>
                <li className= {`cursor-pointer`}>About</li>
                <li className= {`cursor-pointer`}>Careers</li>
            </ul>
        </div>

        <button className='text-black py-3 px-4 bg-[#9EFF00] rounded-md'>Contact Us</button>
    </nav>
  )
}

export default Navbar