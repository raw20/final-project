import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import ModuleList from './ModuleList';
import ModuleDetail from './ModuleDetail';
import ReviewEdit from "./ReviewEdit";
import SmallSelectBox from '../../Main/SmallSelectBox';

import './css/ability.scss';

import { setItem , getItem } from './lib/storage';

function SelfCare(props) {
    const [isNew, setIsNew] = useState(true);
    const [datas, setDatas] = useState(getItem('reviewData') || []);
    const [moduleItem, setModuleItem] = useState({});
    
    const options = [
        { value: '0', label: '회사이해', address: 'study' },
        { value: '1', label: '워크스킬', address: 'study' },
        { value: '2', label: '피플스킬', address: 'study' },
        { value: '3', label: '자기관리', address: 'study' }
    ]

    return (
        <>
            <SmallSelectBox options={options} placeholder={"자기관리"} />
            <Routes>                       
                <Route path="*" element={<ModuleList moduleID={0} setModuleItem={setModuleItem} />}/>
                <Route path=":id" element={
                    <ModuleDetail 
                        moduleItem={moduleItem}
                        datas={datas}
                        isNew = {isNew}                
                        setIsNew = {setIsNew}
                    />} 
                />
                <Route path=":id/edit" element={
                    <ReviewEdit     
                        isNew = {isNew}                
                        setIsNew = {setIsNew}
                    />} 
                />
            </Routes>
        </>
    );
}

export default SelfCare;