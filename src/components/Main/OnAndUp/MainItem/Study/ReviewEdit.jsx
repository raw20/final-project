import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import Editor from './_commos/Editor'

import { setItem , getItem } from './lib/storage';

function ReviewEdit({datas, addData, setData, saveReviewData}) {
    const [isNew, setIsNew] = useState(true);
    const [moduleId, setmoduleId] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        JSON.parse(datas).map((el, index, data) => {
            if(id == el.id) {
                setmoduleId(index);
                setIsNew(false);
            }
        })
        console.log('dwd',datas[moduleId])
    },[])


    return (
        <div>
            <Editor id={id} isNew={isNew} data={ isNew ? '' : datas[moduleId]} addData={addData} setData={setData} />
            <Link to = {`../${id}`} className="submitBtnArea">
                <button className='submitBtn' onClick={saveReviewData}>제출하기</button>
            </Link>
        </div>
        
    );
}

export default ReviewEdit;
