import { diffDayAndTime } from '@fullcalendar/react';
import React, { useState, useEffect }  from 'react';
import { Chart } from "react-google-charts";

function AfterResult(props) {
    const [item, setItem] = useState([]);
    const [diffData, setDiffData] = useState([])
    const [show, setShow] = useState(false);
    var tmpBeforeData = Array.from(Array(5), () => new Array(6));
    var tmpAfterData = Array.from(Array(5), () => new Array(6));

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
            var i = 1;
            tmpBeforeData[0][0] = "Ability";
            item.map((ele) => {
                if (ele.date == "before") {
                    tmpBeforeData[i][0]= ele.title;
                    ele.result.map((el,idx) => {
                        tmpBeforeData[0][idx+1] =el.question;
                        tmpBeforeData[i][idx+1] =el.score;
                    })
                    i++;
                }
            });
            
            var j = 1;
            tmpAfterData[0][0] = "Ability";
            item.map((ele) => {
                if (ele.date == "after") {
                    tmpAfterData[j][0]= ele.title;
                    ele.result.map((el,idx) => {
                        tmpAfterData[0][idx+1] =el.question;
                        tmpAfterData[j][idx+1] =el.score;
                    })
                    j++;
                }
            });
            const tmpDiffData  = {
                old: [...tmpBeforeData],
                new: [...tmpAfterData],
            }
            setDiffData(tmpDiffData);
        }
    },[item])
    
    useEffect(() => {
        if (diffData.old && diffData.new) { 
            setShow(true)
            console.log(diffData)
        }
    },[diffData])


    const options = {
        chartArea: { width: "50%" },
        hAxis: {
            title: "역량 점수",
            minValue: 0,
        },
        vAxis: {
            title: "역량종류",
        },
    };

    return (
        <div className="afterResult_box">    
            <div className='afterResult_box_title'>2022년 OO님의 사후 역량변화 그래프</div>
            {
                show ?    
                    <Chart
                        chartType="BarChart"
                        width="95%"
                        height="95%"
                        diffdata={diffData}
                        options={options}
                    />
                : null
            }
        </div>
    );
}

export default AfterResult;