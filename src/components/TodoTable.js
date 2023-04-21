import ToDoRowItem from './ToDoRowItem';

function TodoTable(props) {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Description</th>
          <th scope='col'>Assignee</th>
        </tr>
      </thead>
      <tbody>
        {props.toDos.map((todo) => {
          return (
            <ToDoRowItem
              key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              taskName={todo.taskName}
              taskAssignee={todo.taskAssignee}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoTable;
