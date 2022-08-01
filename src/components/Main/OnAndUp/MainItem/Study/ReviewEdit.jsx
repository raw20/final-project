import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Editor from './_commos/Editor'

import { setItem , getItem } from './lib/storage';

function ReviewEdit({ isNew, setIsNew, saveReviewData}) {
    const [datas, setDatas] = useState(getItem('reviewData') || []);
    const [content, setContent] = useState('');
    const [EditorData, setEditorData] = useState({});
    const history = useNavigate();
    const MySwal = withReactContent(Swal);
    const ID = useLocation().pathname.slice(-8,-7);
    const mID = useLocation().pathname.slice(-6,-5);

    var newDatas = datas; 

    useEffect(() => {
        datas && datas.map((el, index, data) => {
            if(ID == el.ID && mID == el.mID) {
                setContent(datas[index].content)
                setIsNew(false);
            }
        })

        window.scrollTo(0, 0);
      }, []);

    function tmpSaveReviewData() {
        if (window.confirm('저장하시겠습니까?')) {
            var flag = 0;
            datas && datas.map((el, index, data) => {
                if(ID == el.ID && mID == el.mID) {
                    newDatas[index].content = EditorData.content;
                    newDatas[index].isTmp = 1;
                    flag = 1;
                }
            })
        }
    }
    
    function saveReviewData() {
        console.log('EditorData.content',EditorData.content)
        if (EditorData.content == undefined) {
            alert('내용을 입력해주세요!');
        }
        else {
            if (window.confirm('제출하시겠습니까?')) {
                var flag = 0;
                datas && datas.map((el, index, data) => {
                    if(ID == el.ID && mID == el.mID) {
                        newDatas[index].content = EditorData.content;
                        newDatas[index].isTmp = 0;
                        flag = 1;
                    }
                })
        
                if (flag === 0) {
                    newDatas = [
                        ...newDatas,
                        { ...EditorData, isTmp: 0 }
                    ]
                }
                setItem("reviewData",newDatas);
                history('../'+mID);
                alert('제출하였습니다.')
            }
        }
     
    }

    return (
        <div className='detail_practice'>
            <div className="backButton" onClick={ () => { history('../'+mID) }}> 
                <RiArrowGoBackLine size="20"/>
                <div style={{ marginLeft: 10 }}>뒤로가기</div>
            </div>
            <Editor ID={ID} mID={mID} data={ content } setEditorData={setEditorData} />
            <div className='save_btnArea'>
                <div>
                        <button className='tmpSaveBtn' onClick={tmpSaveReviewData}>저장하기</button>
                </div>
                <div>
                    <button className='saveBtn' onClick={saveReviewData}>제출하기</button>
                </div>
            </div>
        </div>
        
    );
}

export default ReviewEdit;