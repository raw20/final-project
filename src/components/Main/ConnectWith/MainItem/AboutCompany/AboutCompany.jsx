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
      <div 
       data-aos="fade-up"
       data-aos-delay="100"
       data-aos-offset="100"
       data-aos-duration="2500"
      className="about-vision-area">
        <h2 className="about-subtitle">비전</h2>
        <div className="admin vi-content">
          <div className="vi-title">경영철학</div>
          <div className="ad-admin">우리는 언제나 팀웍과 조직력으로 도전하고, 성취하고, 도약한다</div>
        </div>
        <div className="mission vi-content">
          <div className="vi-title">미션</div>
          <div className="ad-admin">고객 조직과 고객 구성원의 성공에 공헌한다</div>
        </div>
        <div className="value vi-content">
          <div className="vi-title">기준가치</div>
          <div className="va-content-box">
            <div className="va-content">정직/청렴</div>
            <div className="va-content">고객중심</div>
          </div>
        </div>
        <div className="act-val vi-content">
          <h2>행동가치</h2>
          <ul className="ac-content-list">
            <li className="ac-content"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbcc8e5cd-b660-4079-87ab-32ff0f68778d%2Fact01.gif?table=block&id=a1064e26-059d-4aff-9a63-1acebb844a98&spaceId=7f4267ab-a988-4305-8667-b4a51382a7da&userId=fa3bea6d-e42a-40f8-b88c-7ec43765de26&cache=v2" alt="" /><span> 끊임없는 창조적 혁신의 실천</span></li>
            <li className="ac-content"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F795b6f55-2512-4c72-b96b-b3f43728617a%2Fact02.gif?table=block&id=7c1cf27f-ce34-499f-963e-da500882ffe7&spaceId=7f4267ab-a988-4305-8667-b4a51382a7da&userId=fa3bea6d-e42a-40f8-b88c-7ec43765de26&cache=v2" alt="" /><span> 전문성을 위한 지속적인 학습</span></li>
            <li className="ac-content"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22a0606e-2880-4ca3-9dc6-206d45442d87%2Fact03.gif?table=block&id=8505bc2f-1df7-4663-9159-de927425b33c&spaceId=7f4267ab-a988-4305-8667-b4a51382a7da&userId=fa3bea6d-e42a-40f8-b88c-7ec43765de26&cache=v2" alt="" /><span> 논리와 합리사고 중시</span></li>
            <li className="ac-content"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6176411-0c37-4fea-970a-e2304f779ddf%2Fact04.gif?table=block&id=ab110252-3cfd-468f-826d-2dc68cbc6b40&spaceId=7f4267ab-a988-4305-8667-b4a51382a7da&userId=fa3bea6d-e42a-40f8-b88c-7ec43765de26&cache=v2" alt="" /><span> 업무품질에 대한 집착</span></li>
            <li className="ac-content"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F28aeedb3-d543-4146-80da-03f73f37fab7%2Fact05.gif?table=block&id=b4360c30-5d63-421e-904f-2b225513df20&spaceId=7f4267ab-a988-4305-8667-b4a51382a7da&userId=fa3bea6d-e42a-40f8-b88c-7ec43765de26&cache=v2" alt="" /><span> 승리에 대한 열정</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
