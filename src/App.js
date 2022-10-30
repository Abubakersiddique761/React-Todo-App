import './App.css';
import Search from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Search />
      <Todos />
    </div>
  );
}

export default App;
