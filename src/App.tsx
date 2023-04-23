import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewToDoForm';
import { Todo } from './models/Todo';
import React, { useState } from 'react';

const App: React.FC<{}> = () => {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [showAddNewTodoForm, setShowAddNewTodoForm] = useState(false);

  const addTodo = (taskName: string, assignee: string) => {
    let rowNumber = 0;
    if (toDos.length > 0) {
      rowNumber = toDos[toDos.length - 1].getRowNumber() + 1;
    } else {
      rowNumber = 1;
    }
    const newToDo: Todo = new Todo(rowNumber, taskName, assignee);
    setToDos((toDos) => [...toDos, newToDo]);
  };

  const deleteToDo = (rowNumber: number) => {
    let newRowNumber = 1;
    let filterToDo = toDos.filter(function (todo: Todo) {
      return todo.getRowNumber() !== rowNumber;
    });
    // eslint-disable-next-line
    filterToDo.map((todo: Todo) => {
      todo.setRowNumber(newRowNumber);
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
            {!showAddNewTodoForm
              ? 'Show the Form to Add ToDo'
              : 'Hide the Form'}
          </button>

          {showAddNewTodoForm && (
            <NewToDoForm
              addToDo={addTodo}
              setShowAddNewTodoForm={setShowAddNewTodoForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
