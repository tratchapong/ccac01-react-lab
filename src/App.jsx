import { useState,useMemo } from "react";
import Todos from "./Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos([...todos, new Date().toISOString()])
  }

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000_000_000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo( ()=>{
    return expensiveCalculation(count)
  }, [count])

//  const calculation = expensiveCalculation(count)

  return (
    <>
      <button className="border p-3" onClick={addTodo}>Add todo</button>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button className='border p-2' onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  )
} //re-render

export default App
