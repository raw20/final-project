import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function ModuleList({moduleID, setModuleItem}) {
    console.log(moduleID)
    const [data, setData] = useState([]);
    const [moduleData, setModuleData] = useState([]);
    const itemData = "/db/moduleData.json";
    const ID = moduleID;

    useEffect(() => {
        (async () => {
        const response = await fetch(itemData);
        const json = await response.json();
        console.log('json',json)
        setData(json[ID])
        })();
    },[]);

    useEffect(() => {
        console.log('data',data)
        if (data) {
            setModuleData(data.module);
        }
    },[data])

    return (
            <div className='module_box'>
                {
                    moduleData && moduleData.map((el,index) => {
                        return (
                                <Link key={index} to={`${index+1}`}>
                                    <div className="module_card">
                                        <div className='module_cardImg'>
                                            <div className='cardImg_background'>
                                                <img className="module_Img" src={`${el.card_image}`}></img>
                                                <div className="dim"></div>
                                            </div>
                                            <div className="module_card_hover">
                                                <div className="module_card_hover_text">{el.mconcept}</div>
                                            </div>
                                        </div>
                                        <div className='module_cardTitle_txt'>
                                            <div className="module_cardTitle">{el.mtitle}</div>
                                            <div className='module_cardTitle_sub'>{el.mgoal}</div>
                                        </div>
                                    </div>
                                </Link>
                        )
                    })
                }
                {
                    moduleData && moduleData.map((el,index) => {
                        return (
                            <Link key={index} to={`${index+1}`}>
                            <div className="module_card">
                                <div className='module_cardImg'>
                                    <div className='cardImg_background'>
                                        <img className="module_Img" src={`${el.card_image}`}></img>
                                        <div className="dim"></div>
                                    </div>
                                    <div className="module_card_hover">
                                        <div className="module_card_hover_text">{el.mconcept}</div>
                                    </div>
                                </div>
                                <div className='module_cardTitle_txt'>
                                    <div className="module_cardTitle">{el.mtitle}</div>
                                    <div className='module_cardTitle_sub'>{el.mgoal}</div>
                                </div>
                            </div>
                        </Link>
                        )
                    })
                }
        </div>
    );
}

export default ModuleList;