import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { AppContext } from '../Context/Context';
import { assets } from '../assets/assets';

const Appointment = () => {
  const {docId} = useParams()
  const {doctorsList} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async ()=>{
    const docInfo = doctorsList.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  }, [doctorsList, docId])



  return (
    <div>
      {/* ----------Doctor Details--------- */}
      <div>
        <div>
          <img src= {docInfo.image}/>
        </div>
        
        {/* ----------Doctor Info------- */}
        <div>
        <h3>{docInfo.name} <img src={assets.verified} alt="" /></h3>
        
        <div>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
        </div>
        <p>{docInfo.about}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Appointment
