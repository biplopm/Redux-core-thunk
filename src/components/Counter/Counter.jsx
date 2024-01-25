import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, resetCount, setCount } from '../../redux/Counter/action'

function Counter() {
  const { counter} = useSelector((state)=>state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{ counter}</h1>
      <hr/>
      <button onClick={()=>dispatch(incrementCount)}>--</button>
      <button  onClick={()=>dispatch(decrementCount)}>++</button>
      <button onClick={()=>dispatch(resetCount)}>Reset</button>
      <button onClick={()=>dispatch(setCount)}>Set</button>
      <hr/>
      <hr/>
    </div>
  )
}

export default Counter
