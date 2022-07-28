import React,{ useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

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
                        }
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
                        }
                    }

    return (
        <div className="beforeResult_box">        
            <div className="beforeResult_boxs">
                <div className='beforeResult_abilityResult'>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>자기관리</div>
                        {
                            data[0]? 
                            // <div> { JSON.stringify([data[1] ]) } </div>
                                <ReactApexChart options={options} series={[data[0]]} type="radar" height={200} />
                                : null
                        }

                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>워크스킬</div>
                        {
                            data[2]? 
                                <ReactApexChart options={options} series={[data[2]]} type="radar" height={200} />
                                : null
                        }
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>피플스킬</div>
                        {
                            data[1]? 
                                <ReactApexChart options={options} series={[data[1]]} type="radar" height={200} />
                                : null
                        }
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>자기관리</div>
                        {
                            data[3]? 
                                <ReactApexChart options={options} series={[data[3]]} type="radar" height={200} />
                                : null
                        }
                    </div>
                </div>
                <div className='beforeResult_analysisBox'>
                    <br/>
                    하위 3개 영역 <br />
                    1. ~~~<br/>
                    2. ~~~<br/>
                    3. ~~~<br/>
                </div>
            </div>
        </div>
    );
}

export default BeforeResult;