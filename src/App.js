
import React from 'react'
import Main from './Components/Main'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
   <Route path="/" element={<Main/>}/>
    </Routes>
  )
}

export default App