import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
      e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  	// Add the code for the minus function 
  };
  function multiply(e) {
      e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  	// Add the code for the minus function 
  };
 
  function times(e) {
      e.preventDefault(); 
     setResult((result) => result + Number(inputRef.current.value)); 
    // Add the code for the plus function 
  }; 
 
  function divide(e) {
      e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
    // Add the code for the divide function 
  };
 
  function resetInput(e) {
      e.preventDefault(); 
      inputRef.current.value=""
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) {
      e.preventDefault(); 
      resultRef.current.value = "";
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button> 
        <button onClick={multiply}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>resetInput</button> 
        <button onClick={resetResult}>resetResult</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
