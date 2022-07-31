import { useState, useRef } from "react";
import './css/chemi.css'
const ChemiEditor1 = ({onCreate}) =>{

    const authorInput = useRef()
    const contentInput = useRef()
    const[state,setState] = useState({
        author: '',
        content: '',
        content1: '',
        content2: '',
        content3: '',
        content4: '',
        
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
    onCreate(state.author,state.content,state.content1,state.content2,state.content3,state.content4);
    alert('저장 성공')
    setState({
        author: '',
        content: '',
        content1: '',
        content2: '',
        content3: '',
        content4: '',
           })
  }
    return <div className="chemi-wrap3">
        <main>
            <div className="title">
                <h2>성찰저널</h2>
            </div>
            <ul className="boxlist">
          <li className="box">
          <div className="col-box"></div>
            <div className="img-box"></div>
            
            <input placeholder='1. 내용을 입력하세요' ref={contentInput} name='content' value={state.content} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box light"></div>
            <div className="img-box"></div>
            <input placeholder='2. 내용을 입력하세요' ref={contentInput} name='content1' value={state.content1} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box"></div>
            <div className="img-box"></div>
            <input placeholder='3. 내용을 입력하세요' ref={contentInput} name='content2' value={state.content2} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box light"></div>
            <div className="img-box"></div>
            <input placeholder='4. 내용을 입력하세요' ref={contentInput} name='content3' value={state.content3} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box"></div>
            <div className="img-box"></div>
            
            <input placeholder='5. 내용을 입력하세요' ref={contentInput} name='content4' value={state.content4} onChange={handleChangeState}/>
          </li>
       
        </ul>
            
          
        </main>
      <div className="chemi-name">
        <input placeholder='이름을 입력하세요' ref={authorInput}name='author' value={state.author} onChange={handleChangeState}/>
        </div>
        <div className='chemi-btn'>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
    </div>
};
export default ChemiEditor1;