import React from 'react';
import './Cart.css'
const Cart = (props) => {
const {cart} = props;

let total = 0;
for(const product of cart){
    total = total + product.price
}
const shipping = 20;
const tax = (total+shipping)*.01
const grandTotal = total + shipping + tax;
    return (
        <div className='cart-item'>
            <h3 className='order-samary'>Order samary</h3>
                <p>Item Order: {props.cart.length}</p>
                <p>Total: {total.toFixed(2)}</p>
                <p>Shipping: {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;