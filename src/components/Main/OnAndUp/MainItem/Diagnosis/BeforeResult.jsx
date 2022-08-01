import React,{ useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

import ChartComp from './ChartComp';

function BeforeResult(props) {
    const [data, setData] = useState({});
    const [item, setItem] = useState([]);
    const [show, setShow] = useState(false);

    const tmpData = {};

    const itemData = "/db/testData.json";
    useEffect(() => {
      (async () => {
        const response = await fetch(itemData);
        const json = await response.json();
        setItem(json);
        })();
    },[]);

    useEffect(() => {
        if (item) {
            var tmpSeriesArr = [];
            item.map((ele,index) => {
                if (ele.date == "before") {
                    var tmpScore = [];
                    ele.result.map((el,idx) => {
                        tmpScore.push(el.score);
                    })
                    tmpSeriesArr.push({ "name" : ele.title, "data" : tmpScore})
                }
            });
        }

        setData(tmpSeriesArr);
    },[item])

    const options = {
                        chart: {
                        height: 200,
                        type: 'radar',
                        toolbar: {
                            show: false,
                            tools: {
                              download: false
                            }
                        },
                        dropShadow: {
                            enabled: true,
                            blur: 1,
                            left: 1,
                            top: 1
                        },
                        },
                        stroke: {
                        width: 2
                        },
                        fill: {
                        opacity: 0.1
                        },
                        markers: {
                        size: 0
                        },
                        xaxis: {
                        categories: ['I', 'N', 'T', 'P', 'A']
                        },
                    }

    return (
        <div className="beforeResult_box">        
            <div className="beforeResult_boxs">
                <div className='beforeResult_abilityResult'>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_chart'>
                            {
                                data[0]? 
                                    <ReactApexChart options={options} series={[data[0]]} type="radar" height={200} />
                                    : null
                            }
                        </div>
                        <div className='beforeResult_abilityResult_box_title'>회사이해</div>
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_chart'>
                            {
                                data[1]? 
                                    <ReactApexChart options={options} series={[data[1]]} type="radar" height={200} />
                                    : null
                            }
                        </div>
                        <div className='beforeResult_abilityResult_box_title'>워크스킬</div>
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_chart'>
                            {
                                data[2]? 
                                    <ReactApexChart options={options} series={[data[2]]} type="radar" height={200} />
                                    : null
                            }
                        </div>
                        <div className='beforeResult_abilityResult_box_title'>피플스킬</div>
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_chart'>
                            {
                                data[3]? 
                                    <ReactApexChart options={options} series={[data[3]]} type="radar" height={200} />
                                    : null
                            }
                        </div>
                        <div className='beforeResult_abilityResult_box_title'>자기관리</div>
                    </div>
                </div>

                <div className='beforeResult_analysisBox'>
                    <ul>
                        <span className='beforeResult_analysisBox_title'>나와 맞는 mbti(하위 3개 영역 대신 넣음) </span>
                        <li>
                            <div className='beforeResult_analysisBox_col'/>
                            1. intp - 조용하고 신중한 성격을 지니며 먼저 이해를 한 후 경험합니다. 육감, 영감에 의존하며 미래 지향적이고 진실과 사실에 주로 관심을 가지며 개관적인 판단을 합니다. 분명한 목적과 방향을 알고 철저한 사전 계획을 합니다.
                        </li>
                        <li>
                            <div className='beforeResult_analysisBox_col'/>
                            2. enfj - 외향적인 성향을 가진 이 유형은 intp이 필요로하는 자유와 개인적인 공간을 잘 지켜주어 잘 맞습니다.
                        </li>
                        <li>
                            <div className='beforeResult_analysisBox_col'/>
                            3. esfj - intp의 직설적 성향이 종종 상처를 줄 수 있고 애정표현의 기준과 수월함이 달라 서운함을 느낄 수 있스빈다. 계획과 결정을 서로 미루는 비슷한 성향으로 논쟁의 위험이 있습니다.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BeforeResult;