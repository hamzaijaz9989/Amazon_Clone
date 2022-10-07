import React from 'react'
import amzbaner from "../src/amzbaner.jpg"
import "./Home.css"
import Product from './Product'
function Home() {
  return (
 <>  
 <div className='home'>
<img className='banner' src={amzbaner}></img>

<div className='home_row'>
    <Product id={12}
      title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic'
      price={60}
      rating={5}
      image ='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg'
    />

<Product id={12}
      title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic'
      price={60}
      rating={5}
      image ='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg'
    />
</div>
    </div>
    </>
  )
}

export default Home