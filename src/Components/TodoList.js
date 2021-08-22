import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onToggle, onRemove})=>{
  return (
    <div className='TodoListContainer'>
      {todos.map((todo)=>(
        <TodoListItem todo = {todo} onToggle={onToggle} onRemove={onRemove}/>
      ))}
    </div>
  )
};

export default TodoList;