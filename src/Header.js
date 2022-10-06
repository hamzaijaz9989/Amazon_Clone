import { Search } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Amznlogoo from "../src/Amznlogoo.png"
import "./Header.css"
function Header() {
  return (
    <nav className='header'>
    <Link to="/">
        <img className='header_logo' src={Amznlogoo}/>
    </Link>
    <div className='header_search'>
  
    <input type='text' className="header_searchInput"/>
      <Search className='header_searchIcon'/>
    </div>
      <div className='header_nav'>

        <Link className='header_link'>

          <div className='header_option'>
            <span>Hello hamza</span>
            <span>Sign In</span>
          </div>
        </Link>
      </div>


      <div className='header_nav'>

<Link to="/login" className='header_link'>

  <div className='header_option'>
    <span>Hello hamza</span>
    <span>LogIn</span>
  </div>
</Link>
</div>

<div className='header_nav'>

<Link className='header_link'>

  <div className='header_option'>
    <span>Hello hamza</span>
    <span>Sign In</span>
  </div>
</Link>
</div>

<div className='header_nav'>

<Link className='header_link'>

  <div className='header_option'>
    <span>Hello hamza</span>
    <span>Sign In</span>
  </div>
</Link>
</div>

    </nav>
  )
}

export default Header