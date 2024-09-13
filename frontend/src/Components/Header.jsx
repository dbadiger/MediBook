import React from 'react'
import {assets} from "../assets/assets"

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-secondary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ----------Left---------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <h2 className='text-3xl md:text-4xl lg:5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appoitment with<br/> Best Doctors</h2>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group} alt="" />
            <p>Book your appointment with top doctors in Hubballi, Karnataka, at your convenience. <br className='hidden sm:block '/>Find the perfect doctor for your needs and take control of your healthcare.</p>
        </div>
        <a className='flex items-center bg-white px-9 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
         href="#speciality">
            Book Appoitment &nbsp; <img className='w-3' src={assets.arrow} alt="" />
        </a>
      </div>


      {/* ----------Right---------- */}
      <div className='md:w-1/2 relative'>
            <img className='w-full md:position-absolute bottom-0 h-auto rounded-lg' src={assets.doctors} alt="" />
      </div>


    </div>
  )
}

export default Header
