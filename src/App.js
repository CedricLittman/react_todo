import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
  };

  const inputTask = useRef(null);
  /*
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
      inputTask.current.value = "";
    }
  };

  const addTask = () => {
    if (currentTask.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    setTodoList([...todoList, currentTask]);
    setCurrentTask("");
  };
*/

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== taskToDelete;
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <p>This is a simple React application.</p>
      <div>
        <input
          ref={inputTask}
          type="text"
          placeholder="Enter Task"
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return (
            <div id="task">
              <li key={key}> {val}</li>
              <button onClick={() => deleteTask(val)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
