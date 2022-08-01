import React from "react";
import "./css/aboutCompany.css";
import AboutCompanySlider from "./AboutCompanySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutCompany() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="about-company-wrap">
      <div className="about-summary-area">
      <h2 
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="100"
        data-aos-duration="2500"
        className="about-sub-title">회사 개요</h2>
        <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="100"
        data-aos-duration="2500"
        className="sum-copy-box">
          <span className="copy-sub">
            <div className="sub1">사람을 통한 경쟁의 차별화!</div>
            <div className="sub2">사람을 통한 경영성과의 극대화!</div>
          </span>
          <span className="copy-main">인재강국 대한민국을<br/>세우는 주춧돌이 되겠습니다.</span>
        </div>
        <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="100"
        data-aos-duration="2500"
         className="sum-content-box">
          <div className="logo-box">
            <div className="logo-text">
            <div className="txt">
                <span className="txt1">대표이사</span>
                <span>김정문</span>
              </div>
              <div className="txt">
                <span className="txt1">임직원 수</span>
                <span>211명</span>
              </div>
              <div className="txt">
                <span className="txt1">주소</span>
                <span>서울시 송파구 중대로 121, 2층 (가락동, 롯데캐슬파인힐)</span>
              </div>
            </div>
            <div className="move-logo" onClick={() => window.open('https://www.exc.co.kr/', '_blank')}>홈페이지 바로가기</div>
          </div>
          <div className="sum-content">
            <span>
            엑스퍼트컨설팅은 우리나라 기업교육의 발전에 뜻을 같이하는 컨설턴트, 전문강사, HR전문가들의 공동출자로 설립하여 국내조직의 경영혁신 및 인재육성의 엑설런스 추구를 위한 여러 영역별 사업활동을 전개해 오고 있습니다.<br/><br/>이제 저희는 기업 교육차원에서 한걸음 나아가 성과향상의 솔루션제공으로 고객사와 고객사 구성원의 성공을 돕는데 공헌하고자 합니다.
            </span>
          </div>
        </div>
      </div>
      <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="100"
      data-aos-duration="2500" 
      className="swiper-area">
        <h2 className="about-subtitle">사업분야</h2>
        <span className="swiper-intro">엑스퍼트 컨설팅은 HRM(인사)에서 HRD(교육)까지 Total HR 솔루션을 제공함으로써 고객사의 경쟁력 강화를 위해 노력해오고 있습니다.</span>
        <AboutCompanySlider />
      </div>
      <div className="vision-area">

      </div>
    </div>
  );
}

export default AboutCompany;
