import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount,multiply,divide,clear} from './counter/counterSlice'

function App() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>The current count is {count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment 
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement 
        </button>
        <button onClick={() => dispatch(multiply())}>
          multiply by 2
        </button>
        <button onClick={() => dispatch(divide())}>
          divide by 2 
        </button>
        <div className="incrementamount">
        <input  type='number' style={{height:"30px", width:"90px", textAlign:"center"}}
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button   onClick={() =>  dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
        Increment by amount
      </button>
      </div>
      <button onClick={() => dispatch(clear())}>
          Clear
        </button>
        
      </div>
      
    </>
  )
}

export default App
