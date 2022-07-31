import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import './css/companySlide.css'

export default function App() {
  return (
    <>
    <div className="about-swiper-box">
      <Swiper className="about-swiper"
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        758: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3
        }
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
        el: '.about-page'
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="about-slide slide1">
          <img className="slide-pic" src="/img/slide01.svg" alt="" />
          <div className="about-slide-text">
            <strong className="title">채용</strong>
            <span className="content">모집 마케팅(EMS), NCS(역량)기반 채용 컨설팅 및 채용대행, 면접관 교육 및 파견</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about-slide slide2">
          <img className="slide-pic" src="/img/slide02.svg" alt="" />
          <div className="about-slide-text">
            <strong className="title">진단/평가</strong>
            <span className="content">채용 검사 도구, 시뮬레이션 평가도구, 역량중심 인터뷰, 문화 및 역량 진단</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about-slide slide3">
          <img className="slide-pic" src="/img/slide03.svg" alt="" />
          <div className="about-slide-text">
            <strong className="title">집합교육</strong>
            <span className="content">리더십 개발, 업무성과 향상, 기업문화, 핵심가치, 영업, 마케팅, CS, 취업역량 강화</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about-slide slide4">
          <img className="slide-pic" src="/img/slide04.svg" alt="" />
          <div className="about-slide-text">
            <strong className="title">원격교육</strong>
            <span className="content">독서 통신 교육, 이러닝 교육, 모바일 러닝, 콘텐츠 개발, HRD 시스템 개발</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about-slide slide5">
          <img className="slide-pic" src="/img/slide05.svg" alt="" />
          <div className="about-slide-text">
            <strong className="title">컨설팅</strong>
            <span className="content">중장기 인재 육성전략, 영업력 강화, 비전체계·핵심가치 수립, NCS기반 교육체계, 핵심인재 선발·육성</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about-slide slide6">
          <img className="slide-pic" src="/img/slide06.svg" alt="" />
          <div className="about-slide-text">
            <strong className="title">연수원</strong>
            <span className="content">연수원 집합교육, 취약계층 공익사업, 은퇴·퇴직 교육사업, 외부 대관 사업</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="about-page"></div>
    </div>
  </>
  );
} 