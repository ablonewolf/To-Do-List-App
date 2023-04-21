function ToDoRowItem(props) {
  return (
    <tr>
      <th scope='row'>{props.rowNumber}</th>
      <td>{props.taskName}</td>
      <td>{props.taskAssignee}</td>
      <td>
        <button
          type='button'
          className='btn btn-danger btn-sm'
          onClick={() => props.deleteToDo(props.rowNumber)}>
          Delete Task
        </button>
      </td>
    </tr>
  );
}

export default ToDoRowItem;
