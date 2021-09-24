import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            {/* <h1>i am header</h1> */}
            <img className='logo' src={logo} alt="" />
            <nav className='menu'>
                <a href="/Home">Home</a>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">mega inventory</a>
            </nav>
        </div>
    );
};

export default Header;