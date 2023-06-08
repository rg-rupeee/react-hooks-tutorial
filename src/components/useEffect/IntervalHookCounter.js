import { useEffect, useState } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useeffect');
    const tick = () => {
      setCount(count + 1);
    };
    const interval = setInterval(tick, 1000);

    return () => {
      console.log('removing interval');
      clearInterval(interval);
    };
  }, [count]);

  return <h1>{count}</h1>;
}
export default IntervalHookCounter;
