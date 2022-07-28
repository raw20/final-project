import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

function AfterTest(props) {
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
        title: "2021년 OO님의 역량 그래프",
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
        <div style={{ padding: 30 }}>
            {
                show ?
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
                : null
            }

        </div>
    );
}

export default AfterTest;