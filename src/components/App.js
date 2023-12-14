
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[x, setX] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Button clicked {x} times</h1>
        <button onClick={()=>{
          setX(x + 1);
        }}>Click me</button>
    </div>
  )
}

export default App
