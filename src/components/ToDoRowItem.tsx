import React from 'react';
import { Todo } from '../models/Todo';

const ToDoRowItem: React.FC<{ todo: Todo; deleteToDo: Function }> = (props) => {
  return (
    <tr>
      <th scope='row'>{props.todo.getRowNumber()}</th>
      <td>{props.todo.getTaskName()}</td>
      <td>{props.todo.getAssignee()}</td>
      <td>
        <button
          type='button'
          className='btn btn-danger btn-sm'
          onClick={() => props.deleteToDo(props.todo.getRowNumber())}>
          Delete Task
        </button>
      </td>
    </tr>
  );
};

export default ToDoRowItem;
