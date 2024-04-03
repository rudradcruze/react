import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-4xl text-white">Rudra is learning Redux</h1>
            <Todos />
        </>
    );
}

export default App;
