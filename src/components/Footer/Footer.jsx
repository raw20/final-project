import React from "react";
import { useSelector } from "react-redux";
import "./css/footer.css";

const Footer = () => {
  const footerDisplay = useSelector((state) => state.footer.display);
  return (
    <div className={footerDisplay === "off" ? "ft-wrapper off" : "ft-wrapper"}>
      <div className="ft-box">
        <div className="ft-inner">
          <div className="company">
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
          </div>
          <div className="info">
            <h2>(주)엑스퍼트 컨설팅</h2>
            <p>서울특별시 송파구 중대로 121 롯데캐슬파인힐 2F 우)05178</p>
            <p>사업자등록번호:116-81-48332</p>
            <p>대표자 : 김정문</p>
          </div>
          <div className="ft-company-info">
            <h>Tel. 02)538-2221 / Fax. 02)538-6996</h>
            <p></p>
            <p className="email">E-mail : help@exc.co.kr</p>
            <p>개인정보책임관리자 : 김세환</p>
          </div>
        </div>
        <div className="footer-certification-award">
          <div className="certification-award1">
            <img
              className="awardLogo"
              alt="awardLogo"
              src={process.env.PUBLIC_URL + "/img/award-logo1.png"}
            />
            <div className="award-title">
              <h3>고용노동부인증 우수교육기관</h3>
              <p>원격훈련 부분('19.10~'22.09)</p>
            </div>
          </div>
          <div className="certification-award2">
            <img
              className="awardLogo"
              alt="awardLogo"
              src={process.env.PUBLIC_URL + "/img/award-logo2.jpg"}
            />
            <div className="award-title">
              <h3>서울시 우수기업브랜드</h3>
              <p>2017 하이서울브랜드기업 선정 </p>
            </div>
          </div>
          <div className="certification-award3">
            <img
              className="awardLogo"
              alt="awardLogo"
              src={process.env.PUBLIC_URL + "/img/award-logo3.png"}
            />
            <div className="award-title">
              <h3>PCI 한국심리학회 국내최초 인증</h3>
              <p>PCI(직무기반 인성검사)</p>
            </div>
          </div>
          <div className="certification-award4">
            <img
              className="awardLogo"
              alt="awardLogo"
              src={process.env.PUBLIC_URL + "/img/award-logo4.jpg"}
            />
            <div className="award-title">
              <h3>Main-Biz</h3>
              <p>경영혁신형 중소기업인증</p>
            </div>
          </div>
          <div className="certification-award5">
            <img
              className="awardLogo"
              alt="awardLogo"
              src={process.env.PUBLIC_URL + "/img/award-logo5.png"}
            />
            <div className="award-title">
              <h3>가족친화기업</h3>
              <p>인증획득</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
