import './App.css';
import CounterOne from './components/customHooks/Counter/CounterOne';
import CounterTwo from './components/customHooks/Counter/CounterTwo';
import DocTitleOne from './components/customHooks/DocTitle/DocTitleOne';
import DocTitleTwo from './components/customHooks/DocTitle/DocTitleTwo';
import UserForm from './components/customHooks/userForm/UserForm';
import UserFormHook from './components/customHooks/userForm/UserFormHook';

function App() {
  return (
    <div className='App'>
      {/* <DocTitleOne></DocTitleOne> */}
      {/* <DocTitleTwo></DocTitleTwo> */}
      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <UserForm></UserForm> */}
      <UserFormHook></UserFormHook>
    </div>
  );
}

export default App;
