import React from 'react';
import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'
import {TiDeleteOutline} from 'react-icons/ti';
import './TodoListItem.scss';

const TodoListItem = ({todo, onToggle, onRemove})=>{
  const {text, id, checked} = todo;

  return(
    <div className='TodoListItem'>
      <div className='checkbox' onClick={()=>onToggle(id)}>
        {checked ? <BiCheckboxChecked /> : <BiCheckbox />}
      </div>
      <div className='content'>
        {text}
      </div>
      <div className='remove' onClick={()=>onRemove(id)}>
        <TiDeleteOutline />
      </div>
    </div>
  )
};

export default TodoListItem;