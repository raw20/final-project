import React from 'react';

function BeforeTest(props) {
    return (
        <>
            <div className="beforeTest_content">
                <div className="beforeTest_questions">
                    <div className='beforeTest_desc_inner_title'>16Personalities </div>
                    <p className='beforeTest_desc_inner_txt'>검사가 너무 정확해 "살짝 소름이 돋을 정도예요"라고 성격 유형 검사를 마친 한 참여자는 말했습니다. <br />
                    쉽고 간단하면서도 정확한 성격 유형 검사를 통해 당신이 누구이며, 왜 그러한 특정 행동 성향을 보이는지 확인하십시오.</p>
                    <div className="beforeTest_question">
                    <div className='beforeTest_question_g'>1. 주기적으로 친구를 만든다.</div>
                        <div className="beforeTest_answer_area">
                            <div className="beforeTest_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_text">그렇다</div>
                            </div>
                        </div>
                    </div>
                    <div className="beforeTest_question">
                        <div className='beforeTest_question_g'>2. 자유 시간 중 상당 부분을 관심사를 탐구하는 데 할애한다.</div>
                        <div className="beforeTest_answer_area">
                            <div className="beforeTest_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_text">그렇다</div>
                            </div>
                        </div>
                    </div>
                    <div className="beforeTest_question">
                        <div className='beforeTest_question_g'>3. 일이 잘못될 때를 대비해 여러 대비책을 세우는 편이다.</div>
                        <div className="beforeTest_answer_area">
                            <div className="beforeTest_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_text">그렇다</div>
                            </div>
                        </div>
                    </div>
                    <div className="beforeTest_question">
                        <div className='beforeTest_question_g'>4. 압박감이 심한 환경에서도 평정심을 유지하는 편이다.</div>
                        <div className="beforeTest_answer_area">
                            <div className="beforeTest_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_text">그렇다</div>
                            </div>
                        </div>
                    </div>
                    <div className="beforeTest_question">
                        <div className='beforeTest_question_g'>5. 다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다.</div>
                        <div className="beforeTest_answer_area">
                            <div className="beforeTest_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_text">그렇다</div>
                            </div>
                        </div>
                    </div>
                    <div className="beforeTest_question">
                        <div className='beforeTest_question_g'>6. 파티나 행사에서 새로운 사람에게 먼저 자신을 소개하기보다는 주로 이미 알고 있는 사람과 대화하는 편이다.</div>
                        <div className="beforeTest_answer_area">
                            <div className="beforeTest_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_text">그렇다</div>
                            </div>
                        </div>
                    </div>
                    <div className="beforeTest_notice">
                        <div className='beforeTest_notice_inner'>
                            <div className='beforeTest_notice_txt'>Expert는 회원의 개인정보를 안전하게 취급하는데 최선을 다합니다. 개인정보보호법」 등 관련 법령상의 개인정보 보호 규정을 준수하며, 수집된 개인정보는 상기 목적 이외의 용도로는 사용되지 않습니다. 
                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적 달성 시 지체없이 파기합니다. 다만 다른 법령에서 별도의 기간을 정하고 있는 경우나 이용자의 요청에 따라 기간을 달리 정한 경우에는 그 기간이 경과한 후 파기 등의 필요한 조치를 취합니다.<br />
                            <br />양식은 한번만 제출할 수 있으며, 제출 시 수정이 불가합니다.</div>
                        </div>
                        <div className='beforeTest_bottom'>
                            <div className="beforeTest_notice_area">
                                <div className="beforeTest_notice_answer">
                                <input type="checkbox" />
                                <div className="beforeTest_notice_yes">내용을 읽었고 이에 동의합니다.</div>
                                </div>
                            </div>
                            <div className='beforeTest_button'>
                                <button className='beforeTest_button_left'>임시저장</button>
                                <button className='beforeTest_button_right'>제출하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BeforeTest;