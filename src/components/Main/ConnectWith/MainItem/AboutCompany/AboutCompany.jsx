import React from "react";
import "./css/aboutCompany.css";
function AboutCompany() {
  return (
    <div className="about-company-wrap">
      <div className="about-company-content">
        엑스퍼트컨설팅은 국내조직의 경영혁신 및 인재육성의 엑설런스 추구를 위한
        <br />
        여러 영역별 사업활동을 전개해 오고 있습니다.
      </div>
      <div className="about-company-img">
        <img src="https://picsum.photos/id/144/260/500" alt="sample1" />
        <img src="https://picsum.photos/id/1033/260/500" alt="sample2" />
        <img src="https://picsum.photos/id/123/260/500" alt="sample3" />
      </div>
    </div>
  );
}

export default AboutCompany;
