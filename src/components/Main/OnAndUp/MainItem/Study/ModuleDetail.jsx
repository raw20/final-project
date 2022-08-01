import React,{ useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';


import Modal from 'react-modal';
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Markup } from 'interweave';
import { useMediaQuery } from "react-responsive"
import withReactContent from 'sweetalert2-react-content';
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { Pagination, Navigation, Autoplay} from "swiper/core";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { setItem , getItem, removeItem } from './lib/storage';

function ModuleDetail({ isNew, setIsNew }) {
    const [cardNewsModalIsOpen, setCardNewsModalIsOpen] = useState(false);
    const [microLearningModalIsOpen, setMicroLearningModalIsOpen] = useState(false);
    const [moduleInfo, setModuleInfo] = useState({});
    const [isTmp, setIsTmp] = useState(2);
    const [content, setContent] = useState('작성하기 버튼을 눌러 느낀 점을 적어보세요!');
    const history = useNavigate();

    const ID = useLocation().pathname.slice(-3,-2);
    const mID = useLocation().pathname.slice(-1);

    const itemData = "/db/moduleData.json";

    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
      });
      const isTablet = useMediaQuery({
        query : "(min-width:758px) and (max-width:1023px)"
      });

      const isMobile = useMediaQuery({
        query : "(max-width:757px)"
      });

    useEffect(() => {
        (async () => {
        const response = await fetch(itemData);
        const json = await response.json();
        setModuleInfo(json[ID].module[mID-1])
        })();
    },[]);

    const [datas, setDatas] = useState(getItem('reviewData') || []);

    useEffect(() => {
        var tmpContent = '';
        if (datas.length > 0) {
            datas.map((el, index, data) => {
                
                if(ID == el.ID && mID == el.mID) {
                    setIsNew(false);
                    setIsTmp(datas[index].isTmp);
                    console.log(datas[index].isTmp)
                    tmpContent = datas[index].content;
                    tmpContent = tmpContent.replace('</p>','');
                    tmpContent = tmpContent.replace('<p>','');
                    setContent(tmpContent);
                }
            });
        }
    },[])



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
        width: "100%",
        height: "390",
        margin: "auto",
        playerVars: {
          autoplay: 1,
        },
    };

    const embedYoutubeOpts = {
        width: "100%",
        height: "300px",
        playerVars: {
            autoplay: 0,
        },
    };

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    function deleteData() {
        if(window.confirm('삭제하시겠습니까')) {
            const newDatas = [...datas] ;
            if (datas.length > 0) {
                datas.map((el, index, data) => {
                    if(ID == el.ID && mID == el.mID) {
                        newDatas.splice(index,1)
                    }
                });
            }
            setItem("reviewData",newDatas);
            alert('삭제하였습니다.');
            history(0);
        }
    }
    
    return (
        <>
            <div className="detail_container">
                <div className="backButton" onClick={ () => { history('../') }}> 
                    <RiArrowGoBackLine size="20"/>
                    <div style={{ marginLeft: 10 }}>뒤로가기</div>
                </div>
                <div className="aboutCompany_detail_summary">
                    <img src={moduleInfo.card_image}></img>
                    <div className="aboutCompany_detail_text">
                        <div className="aboutCompany_detail_title">
                            {moduleInfo.mtitle}
                        </div>
                        <div className="aboutCompany_detail_goal">
                            <dt>학습목표</dt>
                            <dd>{moduleInfo.mgoal}</dd>
                        </div>
                        <div className="aboutCompany_detail_concept">
                            <dt>기본개념</dt>
                            <dd>{moduleInfo.mconcept}</dd>
                        </div>
                    </div>
                </div>
                <div className="detail_cardNews_main">   
                    <div className="detail_cardNews">   
                        <div className="detail_cardNews_title">학습 (마이크로러닝/카드뉴스)</div>   
                        <div className="detail_content">
                            <div className="detail_content_cardNews" onClick={handleCardNewsModal}>
                                <Swiper  
                                    className="embed_modal_swiper_name"
                                    slidesPerView={1}
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
                                    breakpoints={{
                                        335: {
                                          slidesPerView: 1
                                        },
                                        757: {
                                          slidesPerView: 2,
                                          spaceBetween: 20,
                                        }
                                      }}
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
                                <img className="detail_content_cardNews_img" src='/img/img-cardnews01.png'></img>
                                <div className="detail_content_cardNews_title">카드뉴스</div>
                            </div>
                            <div className="detail_content_microLearning" onClick={handleMicroLearningModal}>
                                <YouTube className="embedYoutube" videoId={videoCode} opts={embedYoutubeOpts} />
                                <img className="detail_content_microLearning_img" src='/img/modalimg.jpg'></img>
                                <div className="detail_content_microLearning_title">마이크로러닝</div>
                            </div>
                        </div>
                    </div>
                    <div className="detail_practice">   
                        <div>   
                            <div className="detail_practice_title">생각해보기</div>   
                            <div className="detail_practice_desc">오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점 등에 대해 자유롭게 적어봅시다.</div>   
                        </div>   
                        <div className="detail_practice_textArea">
                            { isTmp == 0 ?
                                <Markup content={content} />
                                : '작성하기 버튼을 눌러 느낀 점을 적어보세요!' 
                            }
                        </div>   
                        <div className="detail_practice_btnArea" to='edit'>   
                            { isTmp == 0 ? 
                                    <Link to="#">   
                                        <button className='deleteBtn' onClick={deleteData}>삭제하기</button>   
                                    </Link>   
                                :
                                null

                            }
                            <Link to="edit">   
                                <button className='writeBtn'>{ isTmp == 0 ? '수정하기' : '작성하기' }</button>   
                            </Link>   
                        </div>
                    </div>
                </div>
            </div>

            <Modal 
                className="cardnewsModal"
                isOpen={cardNewsModalIsOpen && !isMobile}
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
                      left: "25%",
                      width: "50%",
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
                            breakpoints={{
                                // when window width is >= 640px
                                335: {
                                  slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                758: {
                                  slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                  },
                              }}
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
                isOpen={microLearningModalIsOpen && !isMobile}
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
                        top: "130px",
                        left: "20%",
                        width: "60%",
                        height: "65%",
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