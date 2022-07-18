import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './css/ability.scss';

function AboutCompany(props) {
    return (
        
        <div className='module_box'>
            <Link to="1">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg"src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div className="module_cardTitle">모듈명</div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>
            </Link>
            <Link to="2">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg" src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div className="module_cardTitle">모듈명</div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>    
            </Link>
            <Link to="3">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg" src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div className="module_cardTitle">모듈명</div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>  
            </Link>
            <Link to="4">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg"src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div className="module_cardTitle">모듈명</div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>
            </Link>
        </div>

        // <div style={{ borderBottom: '1px lightgray solid' }}>
        //     <div>생각해보기</div>
        //     <p>오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점 등에 대해 자유롭게 적어봅시다.</p>
        // </div>
    );
}

export default AboutCompany;