import MItem1 from './MItem1'
import './css/M.css'
const MList1 = ({diaryList,onRemove,onEdit}) =>{
console.log(diaryList)
    return (
    <div className="DiaryList">
        <h2>활동내용</h2>
        <h4>{diaryList.length}개의 활동내용이 있습니다.</h4>
     <div>
        {diaryList.map((it) =>(
            <MItem1 key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
           
        ))}
     </div>    
    </div>
    );
};
MList1.defaultProps = {
    diaryList: [],
}

export default MList1;