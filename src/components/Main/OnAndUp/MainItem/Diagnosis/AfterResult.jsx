import React, { useState, useEffect }  from 'react';
import { Chart } from "react-google-charts";

function AfterResult(props) {
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
        data.push(["Ability", "2021", "2022"]);
        item.map((ele) => {
                if (ele.date == "2021") {
                    ele.result.map((el) => {
                        data.push([el.title, el.score])
                    })
                }
                if (ele.date == "2022") {
                    ele.result.map((el,index) => {
                        data[index+1].push(el.score)
                    })
                }
        } )
        setTestScore(data)
    },[item])

    // const data = [
    //     ["Ability", "2021", "2022"],
    //     ["개발능력", 80, 90],
    //     ["논리사고력", 70, 75],
    //     ["공간지각능력", 65, 50],
    //     ["실무능력", 30, 70],
    //     ["협업능력", 40, 60],
    // ];

    const options = {
        title: "2021년 대비 2022년 OO님의 역량변화 그래프",
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
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={testScore}
                options={options}
            />
        </div>
    );
}

export default AfterResult;