import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <nav className=' bg-black flex w-full px-4  justify-between items-center pl-24 pr-24 py-5'>
            <img src={logo} alt="" />
            
            <div className='no-underline ml-8 text-white text-lg '>
                
                <Link className='ml-8 hover:text-orange-400' to="/">Shop</Link>
                <Link className='ml-8 hover:text-orange-400' to="/orders">Orders</Link>
                <Link className='ml-8 hover:text-orange-400' to="/inventory">Inventory</Link>
                <Link className='ml-8 hover:text-orange-400' to="/login">Login</Link>
                
        </div>
    </nav>
    );
};

export default Header;