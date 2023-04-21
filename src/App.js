import './App.css';
import TodoTable from './components/TodoTable';
const toDos = [
  { rowNumber: 1, taskName: 'Learn React', taskAssignee: 'Arka' },
  { rowNumber: 2, taskName: 'Revise Python', taskAssignee: 'Arka' },
  { rowNumber: 3, taskName: 'Learn Flask', taskAssignee: 'Arka' },
  { rowNumber: 4, taskName: 'Learn Django', taskAssignee: 'Arka' }
];
function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's List</div>
        <div className='card-body'>
          <TodoTable toDos={toDos} />
        </div>
      </div>
    </div>
  );
}

export default App;
