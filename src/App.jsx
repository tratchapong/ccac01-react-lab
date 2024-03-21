import { useState,useMemo, useCallback } from "react";
import Todos from "./Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback( () => {
    setTodos([...todos, new Date().toISOString()])
  }, [] )

  return (
    <>
      <button className="border p-3" onClick={addTodo}>Add todo</button>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button className='border p-2' onClick={increment}>+</button>
      </div>
    </>
  )
} //re-render

export default App
