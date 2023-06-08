import { useContext } from 'react';
import { UserContext, ChannelContext } from './ParentComponent';
import ComponentF from './ComponentF';

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
      <ComponentF></ComponentF>
    </div>
  );
}
export default ComponentE;
