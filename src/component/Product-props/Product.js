import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.Product);
    // console.log(props);  //*****************check for handelAddToCart */
    const {name,img,price,seller,shipping,starCount,stock} = props.product;
    return (
        <div className='product-container'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            
            <div className="product-details">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>by: {seller}</p>
                <p>Shipping: {shipping}</p>
                <p>Star Count: {starCount}</p>
                <p>Stock: {stock}</p>
                <p><small>only{stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handelAddToCart(props.product)}
                className="btn-addTocart"> add to cart </button>
            </div>
        </div>
    );
};
export default Product;