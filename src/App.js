import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewToDoForm';
import React, { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [showAddNewTodoForm, setShowAddNewTodoForm] = useState(false);

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

  const deleteToDo = (rowNumber) => {
    let newRowNumber = 1;
    let filterToDo = toDos.filter(function (value) {
      return value.rowNumber !== rowNumber;
    });
    // eslint-disable-next-line
    filterToDo.map((todo) => {
      todo.rowNumber = newRowNumber;
      newRowNumber++;
    });

    setToDos(filterToDo);
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's List</div>
        <div className='card-body'>
          {toDos.length > 0 && (
            <TodoTable toDos={toDos} deleteToDo={deleteToDo} />
          )}
          {toDos.length === 0 && (
            <div className='card-title'>Empty Todos List. Please Add Item</div>
          )}
          <button
            onClick={() => setShowAddNewTodoForm(!showAddNewTodoForm)}
            className='btn btn-primary'>
            {!showAddNewTodoForm ? 'Show Form to Add To Do' : 'Hide the Form'}
          </button>

          {showAddNewTodoForm && <NewToDoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
