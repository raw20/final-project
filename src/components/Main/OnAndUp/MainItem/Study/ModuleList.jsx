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
                                <Link key={index} to={`study/${data.address}/${index+1}`}>
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
                                        <div className="module_cardTitle">{el.mtitle}</div>
                                        <div className='module_cardTitle_sub'>{el.mgoal}</div>
                                    </div>
                                </Link>
                        )
                    })
                }
        </div>
    );
}

export default ModuleList;