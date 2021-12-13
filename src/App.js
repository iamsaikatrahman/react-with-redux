import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../src/redux/actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>Increment/Decrement counter</h1>
        <h2>Using React and Redux</h2>
        <div>
          <button onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </button>
          <input type="text" value={myState} />
          <button onClick={() => dispatch(incNumber())}>
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
