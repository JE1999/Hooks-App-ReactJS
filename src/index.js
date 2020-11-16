import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HookApp from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
// import { SimpleForm } from './components/02-useEffect.js/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memo/Memorize';
// import { MemoHooks } from './components/06-memo/MemoHooks';
// import { CallbackHook } from './components/06-memo/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// import './components/08-useReducer/intro-reducer'