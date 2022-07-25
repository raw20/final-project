import React from 'react';

function BeforeTest(props) {
    return (
        <>
            <div className="beforeTest_desc">
                <div className='beforeTest_desc_title'>
                16Personalities 검사</div>
                <p className='beforeTest_desc_txt'>
                본 진단은 쉽고 간단하면서도 정확한 성격 유형 검사를 통해 당신이 누구이며, 왜 <br />그러한 특정 행동 성향을 보이는지 확인하십시오.
                </p>
            </div>
            <div className="beforeTest_question">
                <div className='beforeTest_question_txt'>
                진단 문항
                </div>
            </div>
        </>

    );
}

export default BeforeTest;