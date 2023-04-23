import React from 'react';
import ToDoRowItem from './ToDoRowItem';
import { Todo } from '../models/Todo';

const TodoTable: React.FC<{ toDos: Todo[]; deleteToDo: Function }> = (
  props
) => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Description</th>
          <th scope='col'>Assignee</th>
          <th scope='col'>Actions </th>
        </tr>
      </thead>
      <tbody>
        {props.toDos.map((todo) => {
          return <ToDoRowItem todo={todo} deleteToDo={props.deleteToDo} />;
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
