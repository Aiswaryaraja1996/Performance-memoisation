import "./App.css";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Todo from "./todo/Todo"

function App() {
  const [timer, setTimer] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  }, []);

  return (
    <div className="App">
      <h2>Counter : {timer}</h2>
      <Todo/>
    </div>
  );
}

export default App;
