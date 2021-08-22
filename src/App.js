import React, {useState, useCallback, useRef} from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';

const App = ()=>{
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback((value)=>{
    const todo = {
      text : value,
      id : nextId.current,
      checked : false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  const onToggle = useCallback((id)=>{
    setTodos(todos.map(todo=>todo.id===id ? 
      {...todo, checked:!todo.checked} : todo));
  }, [todos]);

  const onRemove = useCallback(id=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  }, [todos]);

  return (
   <TodoTemplate>
     <TodoInsert onInsert={onInsert}/>
     <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </TodoTemplate>
  );
};

export default App;