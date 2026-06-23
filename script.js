import React from "react";

let root = document.querySelector('#root');
const h1 = React.createElement("h1", {}, "Hello");
console.log(h1);
ReactDOM.createElement(root)