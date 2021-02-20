import React, {useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {BsCardChecklist} from 'react-icons/bs'
function TodoList() {
    const [itemList,setItemList] = useState([])

    useEffect(() => {
        const json = localStorage.getItem('itemList');
        const items = JSON.parse(json);
        
        if(items) {
            setItemList(items)
        }
      },[]);
    
    useEffect(()=>{
        const json = JSON.stringify(itemList);
        localStorage.setItem('itemList', json);
        
    },[itemList]);

    const addItem = item =>{
        if(!item.text || /^\s*$/.test(item.text)){
            return;
        }

        const newItemList = [item,...itemList]
        setItemList(newItemList);
        console.log(itemList)
    }

    const updateItem= (itemId,newItem)=> {
      if(!newItem.text || /^\s*$/.test(newItem.text)){
          return;
      }

      setItemList(prev => prev.map(item => (item.id === itemId ? newItem : item)))
    }

    const removeItem= id => {
        const removeArr = [...itemList].filter(item => item.id !== id)

        setItemList(removeArr);
    }

    const clearItemList=()=> {
       setItemList([]);
    } 

    const finishItem = id => {
        let updatedItemList = itemList.map(item => {
            if (item.id === id){
                item.isComplete = !item.isComplete
            }
            return item
        })

        setItemList(updatedItemList)
    }

    
    return(
        <div>
            
            <h1> <BsCardChecklist className="list-icon"/> TO DO LIST</h1>
            <TodoForm onSubmit={addItem} clearItemList={clearItemList}/>
            <Todo itemList={itemList} finishItem={finishItem} removeItem={removeItem} updateItem={updateItem}/>
        </div>
    )
}

export default TodoList