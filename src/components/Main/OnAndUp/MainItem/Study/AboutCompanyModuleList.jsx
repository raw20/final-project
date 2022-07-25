import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function AboutCompanyModuleList(props) {
    return (
        <div className='module_box'>
            <Link to="aboutCompany/1">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg"src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>
                <div className='module_cardTitle_txt'>
                    <div className="module_cardTitle">신입사원 매너</div>
                    <div className='module_cardTitle_sub'>manner</div>
                </div>
            </Link>
            <Link to="aboutCompany/2">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg" src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>    
                <div className='module_cardTitle_txt'>
                    <div className="module_cardTitle">신입사원 매너</div>
                    <div className='module_cardTitle_sub'>manner</div>
                </div>
            </Link>
            <Link to="aboutCompany/3">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg" src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>  
                <div className='module_cardTitle_txt'>
                    <div className="module_cardTitle">신입사원 매너</div>
                    <div className='module_cardTitle_sub'>manner</div>
                </div>
            </Link>
            <Link to="aboutCompany/4">
                <div className="module_card">
                    <div className='module_cardImg'>
                        <div className='cardImg_background'>
                            <img className="module_Img_bg"src={"/img/bg-contents-pop3.png"}></img>
                            <img className="module_Img" src={"/img/img-pop-board.png"}></img>
                        </div>
                    </div>
                    <div style= {{ textAlign: 'center'}}>
                        <button>+</button>
                    </div>
                </div>
                <div className='module_cardTitle_txt'>
                    <div className="module_cardTitle">신입사원 매너</div>
                    <div className='module_cardTitle_sub'>manner</div>
                </div>
            </Link>
        </div>
    );
}

export default AboutCompanyModuleList;