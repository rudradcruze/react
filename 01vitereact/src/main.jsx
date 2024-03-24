import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Hello from "./Hello.jsx";

function MyApp() {
    return (
        <div>
            <h1>Custome App</h1>
        </div>
    );
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank",
//     },
//     children: "Click to visit google",
// };
const anotherAttachment = "hello react";
const anotherElement = (
    <a href="https://google.com" target="_blank">
        Visit Google
    </a>
);

const reactElement = React.createElement(
    "a",
    {
        href: "http://google.com",
        target: "_blank",
        title: "Google",
    },
    "Click me to visit googlele",
    anotherAttachment
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
