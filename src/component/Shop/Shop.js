import React, { useLayoutEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product-props/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useLayoutEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setProducts(data))
    },[])
    const handelAddToCart =(product) =>{
            const newCart = [...cart, product];
            setCart(newCart);
            // console.log(product.name)
            // console.log(product);
            // console.log('clicked');
    }
    return (
        <div className='shop-container'>
            <div className="product-continer">
                <h1 className='all-product'>Product</h1>
                {/* <h3>Products:{products.length}</h3> */}
                {
                    // products.map(product=>console.log(product))
                    products.map(product=><Product 
                        key = {product.key}
                        product = {product}
                        handelAddToCart={handelAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;