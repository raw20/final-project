import React, { useEffect, useState, useCallback } from 'react';
import Editor from './_commos/Editor'
import axios from 'axios';
import debounce from 'lodash.debounce';

import { setItem , getItem } from './lib/storage';

const debounceSetItem = debounce(setItem,6000)

function ReviewEdit({match}) {
    const [reviews,setReviews] = useState(getItem('review') ||  [])

    // useEffect((newReview) => { //새로적은 값으로 todos 를 교체 
    //     console.log('ddsd')
    //     const newReviews  = [...reviews]; // todos가 훼손되지 않도록 복사 새로운 newTodos 배열이 생긴것  
    //     newReviews = newReview;
    //     setReviews(newReviews);  
    //     debounceSetItem('review',newReviews)
    //   },[...reviews])

    // console.log('d',match.params)
    // useEffect(()=>{
    //     axios('/feeling.json')
    //     .then(response=>response.data)
    //     // .then(data=>setCardData(data))
    //      .catch(error=>{console.log(error)})
    // },[])

    function postFeeling() {
        let data = {
            "id": 2,
            "content": "2dde"
        };
        setReviews(data)
    }
    return (
        <div>
            <Editor />

            <button onClick={postFeeling}>submit</button>
        </div>
        
    );
}

export default ReviewEdit;