import React from "react";
import "./css/contents.css";
function Contents({ content }) {
  return (
    <li className="contents-list">
      <span className="contents-title">{content.title}</span>
      <div style={{ backgroundImage: `url(${content.contents})` }}></div>
    </li>
  );
}

export default Contents;
