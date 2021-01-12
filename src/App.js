import './App.css';
import ToDoList from './stories/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoList todos={[]} status={"ALL"} isCheckAll={false}></ToDoList>
    </div>
  );
}

export default App;
