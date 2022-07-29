import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import ModuleList from './ModuleList';
import ModuleDetail from './ModuleDetail';
import ReviewEdit from "./ReviewEdit";

import './css/ability.scss';

import { setItem , getItem } from './lib/storage';

function PeopleSkill(props) {
    const defaultData = [
        {   id: 1, content: '1번' },
        {   id: 2, content: '2번' },
        {   id: 3, content: '3번' }
    ]
    const [datas, setDatas] = useState(getItem('reviewData') ||  defaultData);
    const [moduleItem, setModuleItem] = useState({});
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
    
    useEffect(() => {
        console.log('item',moduleItem)
    },[moduleItem])
    
    return (
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
    );
}

export default PeopleSkill;