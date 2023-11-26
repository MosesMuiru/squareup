import Image from 'next/image'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'


export default function Home() {
  return (
   <main className='bg-[#1A1A1A]'>
    <div className=" w-full h-full">

    <Navbar/>
    <HomePage/>
    </div>

  

   </main>
  )
}
