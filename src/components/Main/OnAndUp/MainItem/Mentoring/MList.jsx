import MItem from './MItem'
import './css/M.css'
const MList = ({diaryList,onRemove,onEdit}) =>{
console.log(diaryList)
    return (
    <div className="DiaryList">
        <h2>계획서</h2>
        <h4>{diaryList.length}개의 계획이 있습니다.</h4>
     <div>
        {diaryList.map((it) =>(
            <MItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
           
        ))}
     </div>    
    </div>
    );
};
MList.defaultProps = {
    diaryList: [],
}

export default MList;