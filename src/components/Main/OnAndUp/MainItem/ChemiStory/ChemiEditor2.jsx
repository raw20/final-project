import { useState, useRef } from "react";
import './css/chemi.css'
const ChemiEditor2 = ({onCreate}) =>{

    const authorInput = useRef()
    const contentInput = useRef()
    const[state,setState] = useState({
        author: '',
        content: '',
        
    })

    const handleChangeState = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
            
        })
    }
  const handleSubmit = ()=>{
    if(state.author.length < 1){
        authorInput.current.focus()
        //focus
        return ;
    }
    if(state.content.length < 5){
        contentInput.current.focus()
        //focus
        return ;
    }
    onCreate(state.author,state.content);
    alert('저장 성공')
    setState({
        author: '',
        content: '',
           })
  }
    return <div className="DiaryEditor">
      
        <div>
            <input ref={authorInput}name='author' value={state.author} onChange={handleChangeState}/>
        </div>
        <div>
            <textarea ref={contentInput} name='content' value={state.content} onChange={handleChangeState}/>
        </div>
        
        <div classname='chemi-btn'>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
    </div>
};
export default ChemiEditor2;