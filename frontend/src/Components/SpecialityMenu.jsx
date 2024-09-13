import React from 'react'
import {specialityData} from "../assets/assets"
import {Link} from "react-router-dom"

const SpecialityMenu = () => {

  return (
    <div id="speciality" className='flex flex-col items-center gap-4  py-16 text-gray-800'>
        <h1 className='text-3xl font-medium '>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Find the right doctor for your needs. Choose your specialty and browse our list of qualified professionals.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-14 sm:w-20 mb-2 bg-gray-300 p-1 rounded-full' src={item.image} alt="" />
                    <p className='text-sm'>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu
