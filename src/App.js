
import React from 'react'
import Main from './Components/Main'

import {Routes, Route} from "react-router-dom"

export const App = () => {
  return (
    <Routes>
   <Route path="/" element={<Main/>}/>
    </Routes>
  )
}

export default App