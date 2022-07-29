import React,{ useEffect, useState, useRef, useCallback } from 'react';


import Modal from 'react-modal';
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { Pagination, Navigation, Autoplay} from "swiper/core";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { setItem , getItem } from './lib/storage';

function ModuleDetail({setSelectedImgIndex, moduleItem}) {
    const [cardNewsModalIsOpen, setCardNewsModalIsOpen] = useState(false);
    const [microLearningModalIsOpen, setMicroLearningModalIsOpen] = useState(false);
    const [moduleId, setmoduleId] = useState(0);
    const [isNew, setIsNew] = useState(true);
    const { id } = useParams();
    const defaultData = [
        {   id: 1, content: '1번' },
        {   id: 2, content: '2번' },
        {   id: 3, content: '3번' }
    ]
    const [datas, setDatas] = useState(getItem('reviewData') ||  defaultData);


    useEffect(() => {
        console.log(datas)
        datas.map((el, index, data) => {
            if(id == el.id) {
                setmoduleId(index);
                setSelectedImgIndex(index)
                setIsNew(false);
            }
        })

       // var content = datas[moduleId].content;
    },[])


    // content = content.replace('</p>','');
    // content = content.replace('<p>','');

    SwiperCore.use([Pagination, Navigation, Autoplay]);

    function handleCardNewsModal(e) {
        //setOpenModalId(e.target.id);
        setCardNewsModalIsOpen(true);
    }

    function handleMicroLearningModal(e) {
        //setOpenModalId(e.target.id);
        setMicroLearningModalIsOpen(true);
    }
 
    const videoUrl = "https://youtu.be/eZYJ1rglPUs"
    const videoCode = videoUrl.replace("https://youtu.be/",'');
    

    const youtubeOpts = {
        width: "640",
        height: "390",
        playerVars: {
          autoplay: 1,
        },
      };

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
      console.log('prev')
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
      console.log('nect')
    }, []);

    return (
        <>
                     <div className="detail_container">
                <div className="aboutCompany_detail_summary">
                    <img src={'/img/img-pop-board-m.png'}></img>
                    <div className="aboutCompany_detail_text">
                        <div className="aboutCompany_detail_title">
                            신입사원의 매너
                        </div>
                        <div className="aboutCompany_detail_goal">
                            <dt>학습목표</dt>
                            <dd>이ㅓㄹㅇ마ㅣ러ㅏㅇ시ㅏㄴ어하;ㅁ허</dd>
                        </div>
                        <div className="aboutCompany_detail_concept">
                            <dt>기본개념</dt>
                            <dd>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deleniti alias at iusto! Quod voluptas quos exercitationem dolorem distinctio, velit ut? Pariatur omnis sequi reiciendis a eum suscipit necessitatibus itaque?</dd>
                        </div>
                    </div>
                </div>
                <div className="detail_cardNews_main">   
                    <div className="detail_cardNews">   
                        <div className="detail_cardNews_title">학습 (마이크로러닝/카드뉴스)</div>   
                        <div className="detail_content">
                            <div className="detail_content_cardNews" onClick={handleCardNewsModal}>
                                <img className="detail_content_cardNews_img" src='/img/img-cardnews01.png'></img>
                                <div className="detail_content_cardNews_title">카드뉴스</div>
                            </div>
                            <div className="detail_content_microLearning" onClick={handleMicroLearningModal}>
                                <img className="detail_content_cardNews_img" src='/img/cardNews1.png'></img>
                                <div className="detail_content_cardNews_title">마이크로러닝</div>
                            </div>
                        </div>
                    </div>
                    <div className="detail_practice">   
                        <div>   
                            <div className="detail_practice_title">생각해보기</div>   
                            <div className="detail_practice_desc">오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점 등에 대해 자유롭게 적어봅시다.</div>   
                        </div>   
                        <div className="detail_practice_textArea">
                            {/* { isNew ? '' : content } */}
                        </div>   
                        <div className="detail_practice_btnArea" to='edit'>   
                            <Link to="#">   
                                <button className='tempSaveBtn'>임시저장</button>   
                            </Link>   
                            <Link to="edit">   
                                <button className='writeBtn'>작성하기</button>   
                            </Link>   
                        </div>
                    </div>
                </div>
            </div>

            <Modal 
                className="cardnewsModal"
                isOpen={cardNewsModalIsOpen}
                onRequestClose={()=> setCardNewsModalIsOpen(false)} // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
                style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(15, 15, 15, 0.79)",
                    },
                    content: {
                      position: "absolute",
                      top: "150px",
                      left: "calc(50% - 400px)",
                      width: "800px",
                      height: "60%",
                      border: "1px solid #ccc",
                      background: "#fff",
                      overflow: "auto",
                      WebkitOverflowScrolling: "touch",
                      borderRadius: "4px",
                      outline: "none",
                      padding: "20px",
                    },
                  }}
            >
                <div className='ModalCards'>
                    <div className="ModalCards_btn">
                        <button onClick={()=> setCardNewsModalIsOpen(false)}>X</button>
                    </div>
                    <div className='ModalCards_Title'>카드뉴스</div>
                    <div className="prev-arrow" onClick={handlePrev} >
                        <img src="/img/ic-slick-prev.png"></img>
                    </div>
                    <div className="next-arrow" onClick={handleNext} >
                        <img src="/img/ic-slick-next.png"></img>
                    </div>
                    <div className="ModalCards_swiper">
                        <Swiper  
                            className="modal_swiper_name"
                            ref={sliderRef}
                            pagination={{ 
                                clickable: true,
                                type: "fraction"
                             }}
                            slidesPerView={3}
                            loop = {true}
                            autoplay={{ delay: 2000 }}
                            spaceBetween= {20}
                        >
                            <SwiperSlide>
                                <img id="1" src="/img/img-cardnews01.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="2" src="/img/img-cardnews02.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="3" src="/img/img-cardnews03.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="4" src="/img/img-cardnews04.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="5" src="/img/img-cardnews05.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="6" src="/img/img-cardnews06.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="7" src="/img/img-cardnews07.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="8" src="/img/img-cardnews08.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="9" src="/img/img-cardnews09.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="10" src="/img/img-cardnews10.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="11" src="/img/img-cardnews11.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="12" src="/img/img-cardnews12.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="13" src="/img/img-cardnews13.png"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img id="14" src="/img/img-cardnews14.png"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Modal>
            <Modal 
                className="microLearningModal"
                isOpen={microLearningModalIsOpen}
                onRequestClose={()=> setMicroLearningModalIsOpen(false)} // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
                style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(15, 15, 15, 0.79)",
                    },
                    content: {
                      position: "absolute",
                      top: "150px",
                      left: "calc(50% - 400px)",
                      width: "800px",
                      height: "60%",
                      border: "1px solid #ccc",
                      background: "#fff",
                      overflow: "auto",
                      WebkitOverflowScrolling: "touch",
                      borderRadius: "4px",
                      outline: "none",
                      padding: "20px",
                    },
                  }}
            >
                <div className='ModalCards'>
                    <div className="ModalCards_btn">
                        <button onClick={()=> setMicroLearningModalIsOpen(false)}>X</button>
                    </div>
                    <div className='ModalCards_Title'>마이크로러닝</div>
                    <div className="ModalCards_microLearning">
                        <YouTube videoId={videoCode} opts={youtubeOpts} />
                    </div>
                    
                </div>
            </Modal>
        </>

    );
}

export default ModuleDetail;