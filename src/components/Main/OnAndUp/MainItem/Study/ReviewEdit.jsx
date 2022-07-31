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
    const mID = useLocation().pathname.slice(-6,-5);
    var newDatas = datas; 

    useEffect(() => {
        datas && datas.map((el, index, data) => {
            if(mID == el.id) {
                setContent(datas[index].content)
                setIsNew(false);
            }
        })

        window.scrollTo(0, 0);
      }, []);

    function saveReviewData() {

        MySwal.fire(<p>저장되었습니다.</p>);
        Swal.fire({
            title: '제출하시겠습니까?',
            text: "제출 후 수정 가능합니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '승인',
            cancelButtonText: '취소',
            reverseButtons: true, // 버튼 순서 거꾸로
            
          }).then((result) => {
            if (result.isConfirmed) {
                var flag = 0;
                datas && datas.map((el, index, data) => {
                    if(mID == el.id) {
                        newDatas[index].content = EditorData.content;
                        flag = 1;
                    }
                })
        
                if (flag === 0) {
                    newDatas = [
                        ...newDatas,
                        EditorData
                    ]
                }
                setItem("reviewData",newDatas);
                history('../'+mID);
                Swal.fire(
                    '제출하였습니다.',
                    '클릭시 화면이 이동됩니다.',
                    'success'
                )
            }
          })
    }

    return (
        <div className='detail_practice'>
            <div className="backButton" onClick={ () => { history('../'+mID) }}> 
                <RiArrowGoBackLine size="20"/>
                <div style={{ marginLeft: 10 }}>뒤로가기</div>
            </div>
            <Editor id={mID} data={ content } setEditorData={setEditorData} />
            <div className='detail_practice_btnArea'>
                <div className="submitBtnArea_save">
                        <button className='tempSaveBtn' onClick={saveReviewData}>저장하기</button>
                </div>
                <div className="submitBtnArea">
                    <button className='submitBtn' onClick={saveReviewData}>제출하기</button>
                </div>
            </div>
        </div>
        
    );
}

export default ReviewEdit;
