import { Search, ShoppingBasket} from '@mui/icons-material'
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

        <Link to="/login" className='header_link'>

          <div className='header_option'>
            <span className='h_o_l1'>Hello hamza</span>
            <span className='h_o_l2'>Sign In</span>
          </div>
        </Link>
      </div>


      <div className='header_nav'>

<Link  className='header_link'>

  <div className='header_option'>
    <span className='h_o_l1'>Returns</span>
    <span className='h_o_l2'>& Orders</span>
  </div>
</Link>
</div>

<div className='header_nav'>

<Link className='header_link'>

  <div className='header_option'>
    <span className='h_o_l1'>Your</span>
    <span className='h_o_l2'>Prime</span>
  </div>
</Link>
</div>



<Link to="/checkout" className='header_link'>
  <div className='header_optionBasket'>
    <ShoppingBasket/>
    <span className='countbasket'>0</span>
  </div>
</Link>




    </nav>
  )
}

export default Header