import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {

  let count = 5;

  const increment = () => {
    count++;
    alert("Hello Member!");
  };

  const decrement = () => {
    count--;
    alert("Value Decremented");
  };

  const welcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">

      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => welcome("Welcome")}>
        Say Welcome
      </button>
      <br /><br />

      <button onClick={onPress}>
        Click on me
      </button>

      <hr />

      <CurrencyConverter />

    </div>
  );
}

export default App;