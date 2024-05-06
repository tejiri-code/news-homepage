
import React from 'react'
import Navbar from './Navbar'
import { ItemsGrid } from './ItemsGrid'
import Reviving from './Reviving'
import {Routes, Route} from "react-router-dom"

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