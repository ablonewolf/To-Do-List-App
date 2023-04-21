import './App.css';
import TodoTable from './components/TodoTable';
import React, { useState } from 'react';

const toDos = [
  { rowNumber: 1, taskName: 'Learn React', taskAssignee: 'Arka' },
  { rowNumber: 2, taskName: 'Revise Python', taskAssignee: 'Arka' },
  { rowNumber: 3, taskName: 'Learn Flask', taskAssignee: 'Arka' },
  { rowNumber: 4, taskName: 'Learn Django', taskAssignee: 'Arka' }
];
function App() {
  const addTodo = () => {
    if (toDos.length > 0) {
      const newToDo = {
        rowNumber: toDos.length + 1,
        taskName: 'New Task',
        taskAssignee: 'Arka'
      };

      toDos.push(newToDo);
      console.log(toDos);
    }
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's List</div>
        <div className='card-body'>
          <TodoTable toDos={toDos} />
          <button className='btn btn-primary' onClick={addTodo}>
            Add new To-Do Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
