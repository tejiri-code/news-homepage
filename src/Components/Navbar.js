import React from 'react'
import logo from '../images/logo.svg'
import togglebutton from '../images/icon-menu.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
      <img src={logo}></img>
      <a>Home</a>
      <a>New</a>
      <a>Popular</a>
      <a>Trending</a>
      <a>Categories</a>
      </nav>
      <img src={togglebutton} className='toggle-button'></img>
    </div>
  )
}


export default Navbar
