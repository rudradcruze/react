import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
    const [editTodo, setEditTodo] = useState(null);

    return (
        <>
            <h1 className="text-4xl text-white">Rudra is learning Redux</h1>
            <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
            <Todos setEditTodo={setEditTodo} />
        </>
    );
}

export default App;
