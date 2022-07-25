import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import debounce from 'lodash.debounce';

import AboutCompanyModuleList from './AboutCompanyModuleList';
import AboutCompanyDetail from './AboutCompanyDetail';
import ReviewEdit from "./ReviewEdit";

import './css/ability.scss';

import { setItem , getItem } from './lib/storage';

function AboutCompany(props) {
    const defaultData = [
        {   id: 1, content: '1번' },
        {   id: 2, content: '2번' },
        {   id: 3, content: '3번' }
    ]
    const [datas, setDatas] = useState(getItem('reviewData') ||  defaultData);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    const setData = useCallback((newData) => {
        const newDatas  = [...datas]; 
        newDatas[selectedImgIndex] = newData  ;
        setDatas(newDatas);  
    },[selectedImgIndex, datas])

    const addData = useCallback((newData) => {
        const newDatas = [
          ...datas,
          newData
        ]
        setDatas(newDatas)
        setSelectedImgIndex(datas.length);
    },[datas])

    function saveReviewData() {
        setItem('reviewData',datas)
    }
    
    return (
        <>
            <Routes>                       
                <Route path="*" element={<AboutCompanyModuleList />}/>
                <Route path="aboutCompany/:id/*" element={
                    <AboutCompanyDetail 
                        datas={datas}
                        setSelectedImgIndex={setSelectedImgIndex}
                        selectedImgIndex={selectedImgIndex}
                        addData={addData}
                        setData={setData} 
                    />} 
                />
                <Route path="aboutCompany/:id/edit" element={
                    <ReviewEdit      
                        datas={datas}                   
                        addData={addData}
                        setData={setData} 
                        saveReviewData = {saveReviewData}
                    />} 
                />
            </Routes>
        </>
    );
}

export default AboutCompany;