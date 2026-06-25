import React, {useState} from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Navbar/Hero";

const App = () => {
  let [count, setCount] = useState(0);
let [flag, setFlag] = useState(true);

 
  return (
    <div>
      <Navbar />
      <main>
        <h1>count is - {count}</h1>
        <button onClick={() => setCount((value) => value + 1)}>
          Increment
        </button>
        <button onClick={()=> setFlag(false)}>
          Change 
        </button>
      </main>
      <Hero />
    </div>
  );
};

export default App;
