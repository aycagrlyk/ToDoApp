import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiEdit} from 'react-icons/fi'

function Todo({itemList,finishItem,removeItem,updateItem}){
    const [update,setUpdate] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
        updateItem(update.id,value)
        setUpdate({
            id : null,
            value: ''
        });
    }

    if (update.id){
        return <TodoForm update={update} onSubmit={submitUpdate} />
    }
    return itemList.map(( item, index) => (
        <div className={item.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>
            <div key={item.id} onClick={()=> finishItem(item.id)}>
                {item.text}
            </div>
            <div className="icons">
                <AiOutlineCloseCircle className="delete-icon" onClick={()=> removeItem(item.id)}/>
                <FiEdit className="edit-icon" onClick={()=>setUpdate({id: item.id,value: item.text})}/>
            </div>
        </div>
    ))
}

export default Todo