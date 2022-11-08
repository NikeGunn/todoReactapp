import { clear } from '@testing-library/user-event/dist/clear'
import React, { useState } from 'react'



const App = () => {



const[todos, setTodos]= useState([])
const[userInput, setUserInput]= useState("")

const addData = () => {
  setTodos([...todos, userInput])
}


return (
    <div>
      <h1>ToDos App</h1>
      <input onChange={(event)=> setUserInput(event.target.value)} type="text" />
      <button onClick={(event)  => addData() }>Add</button>

      <ol>
        {
          todos.map((todo)=> <li>{todo}</li>)
        }
      </ol>
    </div>
  )

}

export default App
