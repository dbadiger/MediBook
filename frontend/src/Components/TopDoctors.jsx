import React, { useContext } from 'react'
// import { doctorsList} from "../assets/assets"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/Context';


const TopDoctors = () => {

  const navigate = useNavigate();

  const {doctorsList} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 '>
      <h2 className='text-3xl font-medium'>Top Doctos to Book</h2>
      <p className='sm:w-1/3 text-center text-sm'>Find the right doctor for your needs and trust in their expertise.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {
            doctorsList.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/appointments/${item._id}`)} key={index} className='cursor-pointer border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-large font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
        }</div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-primary text-white px-12 py-3 rounded-full mt-10 hover:translate-y-[-10px] transition-all duration-500'>more</button>
    </div>
  )
}

export default TopDoctors
