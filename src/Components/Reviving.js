import React from 'react'
import image1 from '../images/image-retro-pcs.jpg'
import image2 from '../images/image-top-laptops.jpg'
import image3 from '../images/image-gaming-growth.jpg'

export const Reviving = () => {
  return (
    <div className='reviveee'>
        <div className='reviving-flex'>
            <div>
            <img src={image1}></img>
            </div>
            
            <div className='reviving-flex-text'>
                <h1>01</h1>
                <h3>Revivin Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>

        <div className='reviving-flex'>
            <img src={image2}></img>
            <div className='reviving-flex-text'>
                <h1>02</h1>
                <h3>Top 10 Laptops of 2024</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>

        <div className='reviving-flex'>
            <img src={image3}></img>
            <div className='reviving-flex-text'>
                <h1>03</h1>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Reviving
