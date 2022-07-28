import { useState, useRef } from "react";
import './css/chemi.css'
const ChemiEditor = ({onCreate}) =>{

    const authorInput = useRef()
    const contentInput = useRef()
    const[state,setState] = useState({
        author: '',
        content: '',
        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6: '',
        content7: '',
        content8: '',
        
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
    onCreate(state.author,state.content,state.content1,state.content2,state.content3,state.content4,state.content5,state.content6,state.content7,state.content8);
    alert('저장 성공')
    setState({
        author: '',
        content: '',
        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6: '',
        content7: '',
        content8: '',
           })
  }
    return <div className="DiaryEditor">
      
      
        <div className="chemi-table">
       
               
                    
            <table>
                <div className="table-title">
                    <p>1년 이내 : 어떻게 해야 성공적으로 뿌리를 내릴 수 있을까?</p>
                </div>
             <div className="chemi-table-inner">
                <tr>
                    <td>목표</td>
                    <td> <input ref={contentInput} name='content' value={state.content} onChange={handleChangeState}/></td>
                </tr>
                <tr>
                    <td>필요역량</td>
                    <td> <input ref={contentInput} name='content1' value={state.content1} onChange={handleChangeState}/></td>
               
                </tr>
                <tr>
                    <td>실행계획</td>
                    <td> <input ref={contentInput} name='content2' value={state.content2} onChange={handleChangeState}/></td>
                   
                </tr>
                </div>
            </table>
       
            <table>
                <div className="table-title diff">
                    <p>3년 이내 : 어떻게 해야 역량을 기르고 성과를 내며 성장할 수 있을까?</p>
                </div>
                <div className="chemi-table-inner">
                <tr>
                  
                    <td>목표</td>
                    <td> <input ref={contentInput} name='content3' value={state.content3} onChange={handleChangeState}/></td>
                </tr>
                <tr>
                    <td>필요역량</td>
                    <td> <input ref={contentInput} name='content4' value={state.content4} onChange={handleChangeState}/></td>
               
                </tr>
                <tr>
                    <td>실행계획</td>
                    <td> <input ref={contentInput} name='content5' value={state.content5} onChange={handleChangeState}/></td>
                   
                </tr>
                </div>
            </table>
            <table>
                <div className="table-title">
                    <p>5년 이내 : 어떻게 해야 탁월한 성과를 내며 조직과 사회에 공헌할 수 있을까?</p>
                </div>
                <div className="chemi-table-inner">
                <tr>
                  
                    <td>목표</td>
                    <td> <input ref={contentInput} name='content6' value={state.content6} onChange={handleChangeState}/></td>
                </tr>
                <tr>
                    <td>필요역량</td>
                    <td> <input ref={contentInput} name='content7' value={state.content7} onChange={handleChangeState}/></td>
               
                </tr>
                <tr>
                    <td>실행계획</td>
                    <td> <input ref={contentInput} name='content8' value={state.content8} onChange={handleChangeState}/></td>
                   
                </tr>
                </div>
            </table>
        </div>
        <div className="chemi-name">
        <input placeholder='이름을입력하세요' ref={authorInput}name='author' value={state.author} onChange={handleChangeState}/>
        </div>
        <div className='chemi-btn'>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
    </div>
};
export default ChemiEditor;