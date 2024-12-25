// import React from "react";
// import ReactDOM from "react-dom/client";

// const  parant = React.createElement("div",{id:"parant"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"hii am h1 tag "),
//         React.createElement("h2",{},"Hii im h2 tg "),
//     ])
// ])

// console.log(parant);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parant);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hi, I am an h1 tag"),
        React.createElement("h2", {}, "Hi, I am an h2 tag"),
    ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
