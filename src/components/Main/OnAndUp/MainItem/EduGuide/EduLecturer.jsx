import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import EduLecturerCard from './EduLecturerCard';
import './css/EduLecturer.css'
import EduLecturerDetail from './EduLecturerDetail';

function EduLecturer() {
  const [lecData, setLecData] = useState([]);
  const [lecCardIndex, setLecCardIndex] = useState(0);
  const [viewDetail ,setViewDetail] =useState(false)
  const dataUrl = '/db/lecturer.json';
    useEffect(()=>{
      (async () => {
          const res = await axios.get(dataUrl);
          setLecData(res.data);
      })();
  },[]);

    return (
    <div className="lecturer_area">
      {!viewDetail ? 
      (<ul className="lecturer_wrap">
        {
          lecData.map((lec, index)=>
          <EduLecturerCard key={index} 
          lec={lec} 
          setViewDetail={setViewDetail} 
          index={index} 
          setLecCardIndex={setLecCardIndex} 
          lecCardIndex={lecCardIndex} />)
        }
      </ul>) : (
      <EduLecturerDetail 
      setViewDetail={setViewDetail} 
      lecData={lecData} 
      lecCardIndex={lecCardIndex} />)}
      
    </div>
    );
};

export default EduLecturer;