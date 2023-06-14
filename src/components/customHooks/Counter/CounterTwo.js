import useCounter from './hooks/useCounter';

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Incement</button>
      <button onClick={decrement}>Decement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default CounterTwo;
