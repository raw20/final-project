import React from "react";
import "./css/aboutCompany.css";
import AboutCompanySlider from "./AboutCompanySlider";
function AboutCompany() {
  return (
    <div className="about-company-wrap">
      <div className="about-summary-area">
        <h2 className="about-sub-title">회사 개요</h2>
        <div className="sum-copy-box">
          <span className="copy-sub">사람을 통한 경쟁의 차별화! 사람을 통한 경영성과의 극대화!</span>
          <span className="copy-main">인재강국 대한민국을<br/>세우는 주춧돌이 되겠습니다.</span>
        </div>
        <div className="sum-content-box">
          <div className="logo-box">
            <p>홈페이지 바로가기</p>
            <img className="logo-img" src="/img/aboutlogo.png" alt="Excellence & PERformance & Transformation" onClick={() => window.open('https://www.exc.co.kr/', '_blank')} />
          </div>
          <div className="sum-content">
            <span>
            엑스퍼트컨설팅은 우리나라 기업교육의 발전에 뜻을 같이하는 컨설턴트, 전문강사, HR전문가들의 공동출자로 설립하여 국내조직의 경영혁신 및 인재육성의 엑설런스 추구를 위한 여러 영역별 사업활동을 전개해 오고 있습니다.<br/><br/>이제 저희는 기업 교육차원에서 한걸음 나아가 성과향상의 솔루션제공으로 고객사와 고객사 구성원의 성공을 돕는데 공헌하고자 합니다.
            </span>
          </div>
        </div>
      </div>{/* summary-area */}
      <div className="swiper-area">
        <h2 className="about-subtitle">사업분야</h2>
        <span>엑스퍼트 컨설팅은 HRM(인사)에서 HRD(교육)까지 Total HR 솔루션을 제공함으로써 고객사의 경쟁력 강화를 위해 노력해오고 있습니다.</span>
        <AboutCompanySlider />
      </div>{/* swiper-area */}
      <div className="vision-area">
        
      </div>{/* vision-area */}
    </div>
  );
}

export default AboutCompany;
