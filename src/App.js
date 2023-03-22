import React,{useState} from "react";
import './App.css';
import Example from './components/Example';
import List from './components/List';

const tasks = ["buy bread", "call mom", "do homework", "walk"];

function App() {
  
  const [currentTasks, setCurrentTasks] = useState(tasks);

  const newTaskHandler = (task) => {
    setCurrentTasks( (prevData) => {
      return [...prevData, task];
    } );
  }

  return (
    <div>
      <Example newTaskHandler={newTaskHandler}/>
      <List list={currentTasks}/>
    </div>
  );
}

export default App;
