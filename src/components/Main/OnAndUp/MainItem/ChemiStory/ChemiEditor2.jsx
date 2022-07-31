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
  const tempSubmit = () =>{
    onCreate(state.author,state.content);
    alert('임시 저장되었습니다')
    setState({
        author: '',
        content: '',
           })
  }
    return <div className="chemi-wrap4">
      <main>

      <div className="title">
          <h2>자기개발목표</h2>
        </div>
        <div className="chemi-box">
         <div className='chemi-input'>
            <input placeholder='목표를 입력하세요' ref={authorInput}name='author' value={state.author} onChange={handleChangeState}/>
        </div>
        <div className='chemi-input1'>
            <input placeholder='내용을 입력하세요' ref={contentInput} name='content' value={state.content} onChange={handleChangeState}/>
        </div>
        </div>
        <div className='chemi-btn'>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
        <div className='chemi-btn'>
            <button onClick={tempSubmit}>임시저장</button>
        </div>
        </main>
    </div>
};
export default ChemiEditor2;