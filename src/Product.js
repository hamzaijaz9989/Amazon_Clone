import React from 'react'
import "./Product.css"
function Product({ id, title, price, rating, image }) {
    return (
        <div className='main'>
            <div className='product'>
                <div className='prod_info'>
                    <p>{title}</p>
                    <p className='prod_price'>
                        <small>$</small>
                        <strong >{price}</strong>
                    </p>
                    <div className='prod_rating'>
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))}

                    </div>
                </div>
                <img src={image} />
                <button>Add to Basket</button>
            </div> </div>
    )
}

export default Product