import React from 'react';

function BeforeResult(props) {
    return (
        <div className="beforeResult_box">        
            <div className="beforeResult_boxs">
                <div className='beforeResult_abilityResult'>
                    <div>회사이해</div>
                    <div>워크스킬</div>
                    <div>피플스킬</div>
                    <div>자기관리</div>
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