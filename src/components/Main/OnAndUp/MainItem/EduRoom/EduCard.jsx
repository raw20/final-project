import React from "react";
import EduCopyBtn from './EduCopyBtn'

function EduCard({edu}) {
  return (
      <li className="edu_box">
        <div className="img_box">
          <img className="edu_logo" alt={edu.logoAlt} src={edu.logoUrl} />
        </div>
        <span className="edu_title">{edu.title}</span>
        <span className="edu_url">Url : {edu.url}</span>
        <EduCopyBtn url={edu.url} />
      </li>
  )
}

export default EduCard;
