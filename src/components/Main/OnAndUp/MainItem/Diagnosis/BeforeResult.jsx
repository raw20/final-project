import React from 'react';
import { Chart } from "react-google-charts";

function BeforeResult(props) {

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];
    
    const options = {
        legend: 'none'
    };

    return (
        <div className="beforeResult_box">        
            <div className="beforeResult_boxs">
                <div className='beforeResult_abilityResult'>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>자기관리</div>
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options = {options}
                            width={"100%"}
                            height={"240px"}
                        />
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>워크스킬</div>
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>피플스킬</div>
                    </div>
                    <div className='beforeResult_abilityResult_box'>
                        <div className='beforeResult_abilityResult_box_title'>자기관리</div>
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