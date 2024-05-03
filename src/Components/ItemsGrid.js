import React from 'react'
import DesktopImage from './DesktopImage'
import { BrightFuture } from './BrightFuture'
import New from './New'


export const ItemsGrid = () => {
  return (
    <div className='items-grid'>
        <DesktopImage/>
        <BrightFuture/>
        <New/>
    </div>
  )
}

export default ItemsGrid
