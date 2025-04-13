import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ExpensesComponent from './components';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<ExpensesComponent/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
