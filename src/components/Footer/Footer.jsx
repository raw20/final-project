import React from 'react';
import "./css/footer.css";

const Footer = () => {
  return (
    <div className='ft-wrapper'>
      <div className="ft-inner">
        <div className='ft-company-info'>
          <div className='company'>
            <img className="companyLogo" alt="companyLogo" src="img/logo.png" />
            <h4 className="companyName">(주)엑스퍼트 컨설팅</h4>
            <h4>대표:김정문</h4>
          </div>
          <div className='info'>
            <h4>사업자등록번호:116-81-48332</h4>
            <h4>서울특별시 송파구 중대로 121 롯데캐슬파인힐 2F 우)05178</h4>
          </div>
          <div className='info1'>
            <h4>Tel. 02)538-2221</h4>
            <h4>Fax. 02)538-6996</h4>
          </div>
          <div className='info2'>
            <h4>E-mail:help@exc.co.kr</h4>
            <h4>개인정보책임관리자:김세환</h4>
          </div>
        </div>
        <div className='footer-certification-award'>
          <div className='certification-award1'>
            <img className="awardLogo" alt="awardLogo" src="img/award-logo1.png" />
            <div className='award-title'>
              <h3>고용노동부인증 우수교육기관</h3>
              <p>원격훈련 부분('19.10~'22.09)</p>
            </div>
          </div>
          <div className='certification-award2'>
            <img className="awardLogo" alt="awardLogo" src="img/award-logo2.jpg" />
            <div className='award-title'>
              <h3>서울시 우수기업브랜드</h3>
              <p>2017 하이서울브랜드기업 선정 </p>
            </div>
          </div>
          <div className='certification-award3'>
            <img className="awardLogo" alt="awardLogo" src="img/award-logo3.png" />
            <div className='award-title'>
              <h3>PCI 한국심리학회 국내최초 인증</h3>
              <p>PCI(직무기반 인성검사)</p>
            </div>
          </div>
          <div className='certification-award4'>
            <img className="awardLogo" alt="awardLogo" src="img/award-logo4.jpg" />
            <div className='award-title'>
              <h3>Main-Biz</h3>
              <p>경영혁신형 중소기업인증</p>
            </div>
          </div>
          <div className='certification-award5'>
            <img className="awardLogo" alt="awardLogo" src="img/award-logo5.png" />
            <div className='award-title'>
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