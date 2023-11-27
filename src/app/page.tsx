import Image from 'next/image'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import OurServices from './components/OurServices'



export default function Home() {
  return (
   <main className='bg-[#1A1A1A]'>
    <div className=" w-full h-full">

    <Navbar/>
    <HomePage/>
    <OurServices/>
    
    </div>

  

   </main>
  )
}
