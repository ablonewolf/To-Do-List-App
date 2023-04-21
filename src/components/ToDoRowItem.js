function ToDoRowItem(props) {
  return (
    <tr>
      <th scope='row'>{props.rowNumber}</th>
      <td>{props.taskName}</td>
      <td>{props.taskAssignee}</td>
    </tr>
  );
}

export default ToDoRowItem;
