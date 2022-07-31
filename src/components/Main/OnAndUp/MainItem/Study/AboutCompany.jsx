import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import debounce from 'lodash.debounce';

import ModuleList from './ModuleList';
import ModuleDetail from './ModuleDetail';
import ReviewEdit from "./ReviewEdit";
import SmallSelectBox from '../../Main/SmallSelectBox';

import './css/ability.scss';

import { setItem , getItem, removeItem } from './lib/storage';

function AboutCompany(props) {

    const options = [
        { value: '0', label: '회사이해', address: 'study' },
        { value: '1', label: '워크스킬', address: 'study' },
        { value: '2', label: '피플스킬', address: 'study' },
        { value: '3', label: '자기관리', address: 'study' }
    ]

    const [datas, setDatas] = useState(getItem('reviewData') || []);
    const [moduleItem, setModuleItem] = useState({});
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);
    //removeItem("reviewData");
    const setData = useCallback((newData) => {
        const newDatas  = [...datas]; 
        newDatas[selectedImgIndex] = newData;
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
    
    useEffect(() => {
        console.log('item',moduleItem)
    },[moduleItem])
    
    return (
        <>
            <SmallSelectBox options={options} placeholder={"회사이해"} />
            <Routes>                       
                <Route path="*" element={<ModuleList moduleID={0} setModuleItem={setModuleItem} />}/>
                <Route path=":id" element={
                    <ModuleDetail 
                        moduleItem={moduleItem}
                        datas={datas}
                        setSelectedImgIndex={setSelectedImgIndex}
                        selectedImgIndex={selectedImgIndex}
                        addData={addData}
                        setData={setData} 
                    />} 
                />
                <Route path=":id/edit" element={
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