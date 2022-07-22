import React from 'react';

function AfterResult(props) {
    return (
        <div className="afterResult_box">        
            <div className="afterResult_beforeBox">
                사전 진단 결과
            </div>
            <div>-&gt;</div>
            <div className="afterResult_beforeBox">
                사후 진단 결과
            </div>
        </div>
    );
}

export default AfterResult;