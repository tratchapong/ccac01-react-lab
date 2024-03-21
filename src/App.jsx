import { useState, useEffect, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inpRef = useRef(null)

  // useEffect(() => {
  //   const inp1 = document.getElementById('inp1')
  //   inp1.focus()
  //   // inp1.style.backgroundColor = 'red'
  // },[]);

  useEffect( ()=> {
    console.log(inpRef.current.focus())
  },[])

  return (
    <>
      <input
        id="inp1"
        ref={inpRef}
        type="text"
        className="border"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input className="border" />

    </>
  );
}

export default App
