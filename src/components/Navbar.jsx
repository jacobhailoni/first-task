import React from 'react'
import Logo from './assets/logo.svg'

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={Logo} alt="" width={100} height={100} className="logo"/>
        <h1>Subul First Task</h1>
    </nav>
  )
}

export default Navbar