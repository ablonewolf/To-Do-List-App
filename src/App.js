import './App.css';
import ToDoRowItem from './components/ToDoRowItem';

function App() {
  const toDos = [
    { rowNumber: 1, taskName: 'Learn React', taskAssignee: 'Arka' },
    { rowNumber: 2, taskName: 'Revise Python', taskAssignee: 'Arka' },
    { rowNumber: 3, taskName: 'Learn Flask', taskAssignee: 'Arka' },
    { rowNumber: 4, taskName: 'Learn Django', taskAssignee: 'Arka' }
  ];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's List</div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <ToDoRowItem
                rowNumber={toDos[0].rowNumber}
                taskName={toDos[0].taskName}
                taskAssignee={toDos[0].taskAssignee}
              />
              <ToDoRowItem
                rowNumber={toDos[1].rowNumber}
                taskName={toDos[1].taskName}
                taskAssignee={toDos[1].taskAssignee}
              />
              <ToDoRowItem
                rowNumber={toDos[2].rowNumber}
                taskName={toDos[2].taskName}
                taskAssignee={toDos[2].taskAssignee}
              />
              <ToDoRowItem
                rowNumber={toDos[3].rowNumber}
                taskName={toDos[3].taskName}
                taskAssignee={toDos[3].taskAssignee}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
