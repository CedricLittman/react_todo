import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <p>This is a simple React application.</p>
      <div>
        <input type="text" placeholder="Enter Task" />
        <button>Add Task</button>
      </div>
      <hr />
    </div>
  );
}

export default App;
