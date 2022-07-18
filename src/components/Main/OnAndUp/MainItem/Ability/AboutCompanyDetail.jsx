import React from 'react';
import { HashRouter,Route, Link, Routes } from "react-router-dom";

function AboutCompanyDetail() {
    console.log('dwdwdw')
    return (
        <>
            <div className="module_detail_summary">
                <img src={'/img/img-pop-board-m.png'}></img>
                <div>
                    <div>모듈명</div>
                    <div>학습목표</div>
                    <div>기본개념</div>
                </div>
            </div>
            
            <div>
            사진 
            </div>

            <div>학습 (마이크로러닝/카드뉴스)</div>
            <div>사진</div>

            <div>
                <div style={{ borderBottom: '1px lightgray solid' }}>
                    <div>생각해보기</div>
                    <div>오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점 등에 대해 자유롭게 적어봅시다.</div>
                </div>
                <textarea></textarea>
                <Link to='edit'>
                    <button>작성하기</button>
                </Link>
            </div>
        </>
    );
}

export default AboutCompanyDetail;