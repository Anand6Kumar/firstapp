import React from 'react';
import Product from './product.json'

export default class Home extends React.Component {

    render() {

        return (
            
            <div className="card">
            <img src={Product[0].image} style={{width: "100%"}} />
            <h1>{Product[0].title}</h1>
            <p className="price">{Product[0].price}</p>
            <p>{Product[0].description}</p>
            <p><button>Add to Cart</button></p>
          </div>
        )
    }
}