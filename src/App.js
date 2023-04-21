import './App.css';
import ToDoRowItem from './components/ToDoRowItem';

function App() {
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
              <ToDoRowItem />
              <tr>
                <th scope='row'>2</th>
                <td>Revise Python</td>
                <td>Arka</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Learn Flask</td>
                <td>Arka</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Learn Django</td>
                <td>Arka</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
