import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const { initialCart } = useLoaderData();
    
    const [cart, setCart] = useState(initialCart);

    const handelRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container pt-20'>
            <div>

                {
                    cart.map(product => <ReviewCart
                        key={product.id}
                        handelRemoveItem={handelRemoveItem}
                        product={product}
                    >
                        
                    </ReviewCart>)
                }

                {
                    cart.length === 0 && <div>
                        <h2 className='text-center text-3xl '>No Items for Review.
                            <img src='/public/shop-more.png' width={500}></img>
                            <Link className='bg-orange-300 rounded-lg border-2 p-5' to="/">Shop more
                    </Link> </h2>
                    </div>
                }

            </div>

            <div>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;