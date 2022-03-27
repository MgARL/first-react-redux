import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, clearTodo, removeTodo } from './features/todoSlice'

function Todo() {
    const dispatch = useDispatch()
    const [input,setInput] = useState('')
    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    const list = useSelector((state) => state.todo.items)

    const displayList = list.map( (item, i) =>{
        return(
            <li key={i}>{item} <button onClick={() => dispatch(removeTodo(i))} className='remove-btn'>remove</button></li>
        )
    })

  return (
    <>
    <h2>To do list</h2>
    <ul>
        {displayList}
    </ul>
    <form onSubmit={handleAdd} >
        <input type="text" placeholder='Add Item to list' onChange={ (e) => setInput(e.target.value)} value={input} />
        <button type="submit">Submit</button>
    </form>
    <button onClick={() => dispatch(clearTodo()) }>Clear</button>
    </>
  )
}

export default Todo