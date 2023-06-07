import { useState } from 'react';

function HookCounter() {
  const [count, incrementCount] = useState(0);

  return (
    <div>
      <button onClick={() => incrementCount(count + 1)}>Count {count}</button>
    </div>
  );
}
export default HookCounter;
