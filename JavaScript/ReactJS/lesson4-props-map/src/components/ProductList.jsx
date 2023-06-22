import React, { Component } from 'react'
import Card from './Card'
import product from '../data/product'

class ProductList extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row g-5'>

                    {product.map(item => {
                        return <Card 
                        model={item.title} 
                        photo={item.img} 
                        price={item.price}
                        check={item.stock} />
                    })}



                </div>
            </div>
        )
    }
}

export default ProductList