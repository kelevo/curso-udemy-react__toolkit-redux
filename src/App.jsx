import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( ( state ) => state.counter );
  const dispatch = useDispatch();
  const incrementByAmount = 4;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        count is { counter }
      </div>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button className="button-margin" onClick={ () => dispatch( incrementBy( incrementByAmount ) ) }>
          Incremente by { incrementByAmount }
        </button>
        <button className="button-margin" onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
