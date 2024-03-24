import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [count, setCount] = useState(0);
    const user = {
        name: "Francis Rudra",
        age: 21,
    };

    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
                Tailwind CSS
            </h1>
            <Card userName="Rudra" btnText="click me" />
            <Card userName="D Cruze" />
        </>
    );
}

export default App;
