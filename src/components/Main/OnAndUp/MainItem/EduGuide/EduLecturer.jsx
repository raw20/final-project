import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import LecturerCard from './LecturerCard';
import './css/EduLecturer.css'

function EduLecturer() {
  const [lecData, setLecData] = useState([]);
  const dataUrl = '/db/lecturer.json';
    useEffect(()=>{
      (async () => {
          const res = await axios.get(dataUrl);
          setLecData(res.data);
      })();
  },[]);

    return (
    <div className="lectuerer_area">
      <ul className="lecturer_wrap">
        {
          lecData.map((lec)=><LecturerCard key={lec.id} lec={lec} />)
        }
      </ul>
    </div>
    );
};

export default EduLecturer;