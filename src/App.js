import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewToDoForm';
import React, { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([
    { rowNumber: 1, taskName: 'Learn React', taskAssignee: 'Arka' },
    { rowNumber: 2, taskName: 'Revise Python', taskAssignee: 'Arka' },
    { rowNumber: 3, taskName: 'Learn Flask', taskAssignee: 'Arka' },
    { rowNumber: 4, taskName: 'Learn Django', taskAssignee: 'Arka' }
  ]);

  const addTodo = (taskName, assigned) => {
    let rowNumber = 0;
    if (toDos.length > 0) {
      rowNumber = toDos[toDos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newToDo = {
      rowNumber: rowNumber,
      taskName: taskName,
      taskAssignee: assigned
    };

    setToDos((toDos) => [...toDos, newToDo]);
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's List</div>
        <div className='card-body'>
          <TodoTable toDos={toDos} />
          <NewToDoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
