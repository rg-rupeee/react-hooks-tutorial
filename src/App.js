import './App.css';
import ClassTimer from './components/useRef/ClassTimer';
import FocusInput from './components/useRef/FocusInput';
import HookTimer from './components/useRef/HookTimer';

function App() {
  return (
    <div className='App'>
      {/* <FocusInput></FocusInput> */}
      <ClassTimer></ClassTimer>
      <HookTimer></HookTimer>
    </div>
  );
}

export default App;
