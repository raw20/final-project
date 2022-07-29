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
            <input placeholder='무엇을 배웠는가?' ref={contentInput} name='content' value={state.content} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box light"></div>
            <div className="img-box"></div>
            <input placeholder='어떤 과정을 통해 학습했는가?' ref={contentInput} name='content1' value={state.content1} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box"></div>
            <div className="img-box"></div>
            <input placeholder='이런 학습활동을 통해 무엇을 배웠는가?' ref={contentInput} name='content2' value={state.content2} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box light"></div>
            <div className="img-box"></div>
            <input placeholder='여기서 배운 것을 나의 실생활, 직장, 가정에 적용한다면?' ref={contentInput} name='content3' value={state.content3} onChange={handleChangeState}/>
          </li>
          <li className="box">
          <div className="col-box"></div>
            <div className="img-box"></div>
        
            <input placeholder='나의 기여도는 무엇인가? 또한 우리 팀원들 각자의 기여도를 평가한다면?' ref={contentInput} name='content4' value={state.content4} onChange={handleChangeState}/>
          </li>
       
        </ul>
            
          
        </main>
      
        <input ref={authorInput}name='author' value={state.author} onChange={handleChangeState}/>
        <div classname='chemi-btn'>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
    </div>
};
export default ChemiEditor1;