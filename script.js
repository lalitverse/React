// console.log(window);
// console.log(React);

// let h1 = document.createElement('h1');
// h1.textContent = "Hello";
// document.body.append(h1);
// let rh1 = React.createElement('h1', null, "Hello I am React");
// let rh1 = React.creatElement("h1", null, React.createElement("span", {}, "This is spam"));
// console.log("real dom = " + h1);
// console.log("virtual dom = " + rh1);/

// document.body.append(rh1);
// console.log(ReactDOM);

// let root = document.querySelector("#root");


// let realDomElem = document.querySelector("#root");
// let rootOfReact = ReactDOM.createRoot(realDomElem).render(rh1);


// import{a} from "./main.js";
// console.log(a);

let RdomElement = document.querySelector('#root');
let div = React.createElement('div', {}, React.createElement("span", {}, "I am div"));
ReactDOM.createRoot(RdomElement).render(div);