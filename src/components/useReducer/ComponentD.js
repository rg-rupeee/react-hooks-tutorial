import { useContext } from 'react';
import { CountContext } from './ParentComponent';

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Count ComponentD {countContext.countState}
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
export default ComponentD;
