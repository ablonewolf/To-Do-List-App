import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          Your Todo's List
        </div>
        <div>
          <table border='1'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Learn React</td>
                <td>Arka</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
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
