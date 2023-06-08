import { useContext } from 'react';
import { CountContext } from './ParentComponent';

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Count ComponentA {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}
export default ComponentA;
