import { clear } from '@testing-library/user-event/dist/clear'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';




const App = () => {
  const [todos, setTodos] = useState([])
  const [userInput, setUserInput] = useState("")

  const addData = () => {
    setTodos([...todos, userInput])
  }


  return (


    <div>

    <AppBar position="static">
      


      <div className="hello">TODO APP</div>
      </AppBar>
     


  <br /> <br />

  <TextField onChange={(event) => setUserInput(event.target.value)} id="outlined-basic" label="Your daily Todos" variant="outlined" />
  <br /> <br />
  <Button onClick={(event) => addData()} variant="contained">Add</Button>


<div className="nikhil">

<ul className='hello'>
    {
      todos.map((todo) => <li>{todo}</li>)
    }
  </ul>


</div>




    </div>


    
  )

}

export default App
