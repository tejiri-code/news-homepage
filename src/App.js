import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import { ItemsGrid } from './Components/ItemsGrid'
import Reviving from './Components/Reviving'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemsGrid></ItemsGrid>
      <Reviving/>
    </div>
  )
}

export default App