import React from "react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer"
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="todoapp" className="todoapp">
      <TodoEntry />
      <TodoItems />
      <Footer />
    </div>
  );
}

export default App;
