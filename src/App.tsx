import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<number>(0);

  const incHandler = () => {
    setValue(value + 1);
  };

  const setToLocalStorageHandler = () => {
    localStorage.setItem('counterValue', JSON.stringify(value))
    localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
  };

  const getFromLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  };

  const clearLocalStorageHandler = () => {
    localStorage.clear()
    setValue(0)
  }

  const RemoveLocalStorageHandler = () => {
    localStorage.removeItem("counterValue + 1")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{value}</h1>

        <div className="button-group">
          <button onClick={incHandler}>increment</button>
          <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
          <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
          <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
          <button onClick={RemoveLocalStorageHandler}>RemoveLocalStorage</button>
        </div>
      </header>
    </div>
  );
}

export default App;
