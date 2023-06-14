import { useState } from 'react';

function useCounter(initalValue = 0, value = 1) {
  const [count, setCount] = useState(initalValue);

  const increment = () => {
    setCount(count + value);
  };

  const decrement = () => {
    setCount(count - value);
  };

  const reset = () => {
    setCount(initalValue);
  };

  return [count, increment, decrement, reset];
}
export default useCounter;
