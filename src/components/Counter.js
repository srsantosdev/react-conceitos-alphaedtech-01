import React, { useState } from 'react'

function Counter() {
  // const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  // function handleIncrement() {
  //   setCounter(15)
  //   console.log(counter)
  // }

  // function handleDecrement() {
  //   setCounter(counter - 1)
  //   console.log(counter)
  // }

  return (
    <div>
      <p>{name}</p>
      <input onChange={event => setName(event.target.value)} />
      {/* <button onClick={handleDecrement}>Diminuir</button>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Aumentar</button> */}
    </div>
  )
}

export default Counter