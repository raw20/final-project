import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import EduCard from './EduCard'
import './css/eduroom.css'

function EduRoom() {
  const [eduData, setEduData] = useState([]);
  const dataUrl = '/db/eduRoomData.json';
    useEffect(()=>{
      (async () => {
          const res = await axios.get(dataUrl);
          setEduData(res.data);
      })();
  },[]);

    return (
    <div className="edu_area">
      <ul className="edu_wrap">
        {
          eduData.map((edu)=><EduCard key={edu.id} edu={edu} />)
        }
      </ul>
    </div>
    );
}

export default EduRoom;