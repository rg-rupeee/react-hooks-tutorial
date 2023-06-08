import { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispcatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispcatch('increment')}>Increment</button>
      <button onClick={() => dispcatch('decrement')}>Decrement</button>
      <button onClick={() => dispcatch('reset')}>Reset</button>
    </div>
  );
}
export default CounterOne;
