import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

function AfterTest(props) {
    const [item, setItem] = useState([]);
    const [testScore, setTestScore] = useState([]);
    var data = [];

    const itemData = "/db/testData.json";
    useEffect(() => {
      (async () => {
        const response = await fetch(itemData);
        const json = await response.json();
        setItem(json);
        })();
    });

    useEffect(() => {
        item.map((ele) => {
            if (ele.date == "2021") {
                data.push(["Ability", "2021"]);
                ele.result.map((el) => {
                    data.push([el.title,el.score])
                } )
            }
        } )
        setTestScore(data)
    },[item])



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
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height="400px"
                    data={testScore}
                    options={options}
                />
            }

        </div>
    );
}

export default AfterTest;