import React from 'react'
import { barlow } from '../layout'
import Image from 'next/image'
type Props = {}

function OurServices({}: Props) {
  return (
    <div className='h-[50vh] text-white w-[90vw] mx-auto  mt-10 flex flex-col items-center justify-center  '>
        <h2 className={`text-white text-5xl text-center my-5 fond-extrabold ${barlow.className}`}>Our Services</h2>

    <div className='flex items-center justify-center gap-5 w-full h-full'>


   
        <div>
            <Image src={'/paint.svg'} alt={'design image'} className='' width={40} height={40}/>
            <h2 className='text-3xl my-5 font-bold'>Design</h2>
            <p className=''>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences</p>

            <button className='bg-[#262626] w-full py-4 my-5'>Learn More</button>
        </div>

        <div>
            <Image src={"/iconss.svg"} width={40} height={40} alt='iconns'/>
            <h2 className='text-3xl my-5 font-bold'>Engineering</h2>
            <p className=''>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>

            <button className='bg-[#262626] w-full py-4 my-5'>Learn More</button>
        </div>

        <div>
            <Image src={"/project.svg"} width={40} height={40} alt='engin'/>
            <h2 className='text-3xl my-5 font-bold'>Project Management</h2>
            <p className=''>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>

            <button className='bg-[#262626] w-full py-4 my-5'>Learn More</button>
        </div>
        </div>
    </div>

  )
}

export default OurServices