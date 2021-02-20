import React ,{useState, useEffect, useRef} from "react";
function TodoForm(props){
    const [item,setItem] = useState(props.update ? props.update.value : '');
    const itemRef= useRef(null);

    useEffect(()=>{
        itemRef.current.focus()
    })

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()* 10000),
            text: item
        })

        setItem('')
    }

    const handleChange = e=>{
       setItem(e.target.value);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <>
            {props.update ? (
             <>
            <input className="todo-item update" type="text" placeholder="Update something" value={item} onChange={handleChange} ref={itemRef}/>
        
            <button className="todo-button update">Update</button>
            </>
            ) :
            ( 
            <>
            <>
            <input className="todo-item" type="text" placeholder="Add something" value={item} onChange={handleChange} ref={itemRef}/>
     
            <button className="todo-button">Add</button>
            </>
            <div>
             <button className="todo-button clear" onClick={props.clearItemList}>Clear All</button>
            </div>
            </>
            )
            }
            </>
        </form>

      
    );
}

export default TodoForm;