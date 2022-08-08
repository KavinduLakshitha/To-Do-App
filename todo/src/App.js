import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="todo-app">
      {/* //Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Todo</title>
        <link rel="canonical" href="/home" />
      </Helmet>
      ;
      <TodoList />
    </div>
  );
}

export default App;
