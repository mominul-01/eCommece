import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props ) => {

    const { cart, clearCart, children } = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='bg-gray-200 p-6 fixed top-0 mt-20 w-full h-full text-2xl '>
            <h4 className=' text-4xl font-bold text-orange-400  py-5 '>Order Summary</h4>
            <p className='p-2'>Selected Items: {quantity}</p>
            <p className='p-2'>Total Price: ${totalPrice}</p>
            <p className='p-2'>Shipping: ${totalShipping}</p>
            <p className='p-2'>Tax: ${tax.toFixed(2)}</p>
            <h6 className='p-2'>Grand Total: ${grandTotal.toFixed(2)} </h6>

            <div className=' mt-5 flex-col flex'>
                 <button className='text-center border-2 p-2  text-white   bg-amber-400 rounded-lg w-52 ' onClick={clearCart}>Clear Cart</button>
                     {children}
                <button className='text-center border-2 p-2 mt-4   text-white   bg-amber-400 rounded-lg  w-52 '>
                    <Link to="/orders"> Order</Link>
                 </button>
                    
            </div>
           

        </div>
    );
};

export default Cart;