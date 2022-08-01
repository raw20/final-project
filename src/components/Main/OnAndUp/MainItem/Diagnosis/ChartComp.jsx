import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

function ChartComp(props) {
    const [item, setItem] = useState([]);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    var tmpData = Array.from(Array(5), () => new Array(5))

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
            tmpData[0][0] = "Ability";
            item.map((ele,index) => {
                if (ele.date == "before") {
                    tmpData[index+1][0]= ele.title;
                    ele.result.map((el,idx) => {
                        tmpData[0][idx+1] =el.question;
                        tmpData[index+1][idx+1] =el.score;
                    })
                }
            });
            setData(tmpData)
        }
    },[item])

    useEffect(() => {
        if (data) { setShow(true) }
    },[data])

    const options = {
        chartArea: { width: "60%" },
        hAxis: {
            title: "역량 점수",
            minValue: 0,
        },
        vAxis: {
            title: "역량종류",
        },
    };

    return (
        <div className='afterTest_inner'>
            <div className='afterTest_inner_title'>2022년 OO님의 역량 그래프</div>
            {
                show ?
                <Chart
                    chartType="BarChart"
                    width="95%"
                    height="95%"
                    data={data}
                    options={options}
                />
                : null
            }

        </div>
    );
}

export default ChartComp;