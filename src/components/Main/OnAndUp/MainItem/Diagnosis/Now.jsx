import React, { useEffect, useState } from 'react';
import { useLocation, Route, Link, Routes } from "react-router-dom";

import './css/selfTest.scss';

import BeforeTest from './BeforeTest';
import AfterTest from './AfterTest';

import SmallSelectBox from '../../Main/SmallSelectBox';

function Now(props) {
    const options = [
        { value: '0', label: '현재상태 점검하기', address: 'diagnosis' },
        { value: '1', label: '진단결과보기', address: 'diagnosis' }
    ]
    const [selectedTab, setSelectedTab] = useState(0);
    const { pathname, state } = useLocation(0);
    useEffect(() => {
        if (pathname.indexOf('after') > 0) { //path에 after가 있으면 사후가 selected 되었다고 상태관리
            setSelectedTab(1)
        }  

    },[])
    console.log('now',state)
console.log('dw')
    return (
        <div className="nowContainer">
            <SmallSelectBox options={options} placeholder={"현재상태 점검하기"} />
            <div className="selfTestContainer_box">
                <div className='selfTestContainer_box_inner'>
                    <div className="selfTestContainer_sidebar">
                        <Link className={`${selectedTab === 0 ? 'active' : ''}`} onClick={() => setSelectedTab(0)} to="now/before">
                            <button>#사전</button>
                        </Link>
                        <Link className={`${selectedTab === 1 ? 'active' : ''}`} onClick={() => setSelectedTab(1)} 
                            to="now/after">
                            <button>#사후</button>
                        </Link>
                    </div>
                    <div className="selfTestContainer_content">
                    <Routes>
                            <Route path="*" element={<BeforeTest />} />
                            <Route path="now/before" element={<BeforeTest />} />
                            <Route path="now/after" element={<AfterTest />} />
                    </Routes>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Now;