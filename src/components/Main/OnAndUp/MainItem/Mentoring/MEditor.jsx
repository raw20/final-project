import { useState, useRef } from "react";
import './css/M.css'
const MEditor = ({onCreate}) =>{

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
    return <div className="mento-wrap2">
      <main>

      <div className="title">
          <h2>계획서 작성</h2>
        </div>
        <div className="mento-box">
         <div className='mento-input'>
            <input placeholder='제목를 입력하세요' ref={authorInput}name='author' value={state.author} onChange={handleChangeState}/>
        </div>
        <div className='mento-input1'>
            <input placeholder='내용을 입력하세요' ref={contentInput} name='content' value={state.content} onChange={handleChangeState}/>
        </div>
        </div>
        <div className='mento-btn'>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
        </main>
    </div>
};
export default MEditor;