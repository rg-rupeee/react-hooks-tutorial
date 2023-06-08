import React from 'react';
import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ParentComponent() {
  return (
    <div>
      <UserContext.Provider value={'Rupesh'}>
        <ChannelContext.Provider value={'Garhwal'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default ParentComponent;
