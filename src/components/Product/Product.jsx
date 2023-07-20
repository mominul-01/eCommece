import React from 'react';
const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className=' mx-auto my-auto sm:w-50 sm:h-420px md:w-50 lg:w-60   border-2 border-indigo-500/75 rounded-lg'>
        <img className='sm:w40  md:w-45 lg:w-40 lg:h-[286] mx-auto rounded-lg' src={img} alt="Product Images" />
        <div className='m-3'>
                <h6 className='mt-0 mb-0 font-mono font-bold text-lg  leading-6 text-black '>{name}</h6>
                <div className='mt-2 '>
                    
                    <p>Price: <span className='text-orange-600 text-lg'>${price} </span></p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Stars</p>
                </div>
        </div>
        <button onClick={() => handleAddToCart(props.product)} className='text-center bg-orange-200 w-full  text-base rounded-lg  p-2'>
            Add to Cart
            
            </button>
    </div>
    );
};

export default Product;