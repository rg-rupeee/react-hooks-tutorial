import { useReducer } from 'react';

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.value };
    case 'decrement':
      return { count: state.count - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [countOne, dispcatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispcatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>Count {countOne.count}</div>
        <button onClick={() => dispcatchOne({ type: 'increment', value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispcatchOne({ type: 'decrement', value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispcatchOne({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispcatchOne({ type: 'increment', value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispcatchOne({ type: 'decrement', value: 5 })}>
          Decrement 5
        </button>
      </div>
      <div>
        <div>Count {countTwo.count}</div>
        <button onClick={() => dispcatchTwo({ type: 'increment', value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispcatchTwo({ type: 'decrement', value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispcatchTwo({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}
export default CounterTwo;
