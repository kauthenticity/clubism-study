import React from 'react';
import './TodoInsert.scss';

const TodoInsert = ({onInsert})=>{
  const [value, setValue] = React.useState('');

  const onChange = React.useCallback((e)=>{
    setValue(e.target.value);
  }, []);

  const onSubmit = React.useCallback((e)=>{
    e.preventDefault();
    onInsert(value);
    setValue('');
  }, [onInsert, value]);


  return(
    <form className="insertTodo" onSubmit = {onSubmit}>
      <input type="text" placeholder="input your todo" value={value}  onChange={onChange}/>
      <button type="submit">
        ADD
      </button>
    </form> 
  );
};

export default TodoInsert;