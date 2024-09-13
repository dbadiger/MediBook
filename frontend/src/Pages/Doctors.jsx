import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/Context';


const Doctors = () => {
  const {doctorsList} = useContext(AppContext)
  const {speciality} = useParams();
  // console.log(speciality);

  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate();

  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctorsList.filter(doc =>doc.speciality === speciality))
    }
    else{
      setFilterDoc(doctorsList)
    }
  }

  useEffect(()=>{
    applyFilter()
  }, [doctorsList, speciality])
  
  return (
    <div className=''>
      <p className='text-gray-600 font-bold'>Browse through the Doctors Speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p onClick={()=>speciality === 'General Doctor' ? navigate('/doctors') : navigate('/doctors/General Doctor')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "General Doctor"? "bg-indigo-100 text-black": ""}`}>General Doctor</p>
          <p onClick={()=>speciality === 'Endocrinologists' ? navigate('/doctors') : navigate('/doctors/Endocrinologists')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Endocrinologists"? "bg-indigo-100 text-black": ""}`}>Endocrinologists</p>
          <p onClick={()=>speciality === 'Cardiologists' ? navigate('/doctors') : navigate('/doctors/Cardiologists')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Cardiologists"? "bg-indigo-100 text-black": ""}`}>Cardiologists</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Dermatologist"? "bg-indigo-100 text-black": ""}`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Gynecologist"? "bg-indigo-100 text-black": ""}`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Neurologist"? "bg-indigo-100 text-black": ""}`}>Neurologist</p>
          <p onClick={()=>speciality === 'Orthopedic' ? navigate('/doctors') : navigate('/doctors/Orthopedic')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Orthopedic"? "bg-indigo-100 text-black": ""}`}>Orthopedic</p>
          <p onClick={()=>speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Pediatrician"? "bg-indigo-100 text-black": ""}`}>Pediatrician</p>
          <p onClick={()=>speciality === 'Psychiatrist' ? navigate('/doctors') : navigate('/doctors/Psychiatrist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-30 rounded transition-all cursor-pointer ${speciality === "Psychiatrist"? "bg-indigo-100 text-black": ""}`}>Psychiatrist</p>
        </div>

        <div className=" w-full grid grid-cols-auto gap-4 gap-y-6">
          {
            filterDoc.map((item,index)=>(
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
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
