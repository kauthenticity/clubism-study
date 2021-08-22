import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children})=>{
  return (
    <div className="TodoTemplate">
      <div className="title">What is your main focus today?</div>
      <div className='content'>
        {children}
      </div>
    </div>
  )
};

export default TodoTemplate;