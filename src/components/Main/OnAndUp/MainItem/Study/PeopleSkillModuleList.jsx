import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function PeopleSkillModuleList(props) {
    return (
        <div className='module_box'>
            <Link to="peopleSkill/1">
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
            <Link to="peopleSkill/2">
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
            <Link to="peopleSkill/3">
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
            <Link to="peopleSkill/4">
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
    );
}

export default PeopleSkillModuleList;