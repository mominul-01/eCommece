import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDeleteLeft, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewCart = ({product,handelRemoveItem}) => {

    const {id, name, price, quantity, shipping, img} = product;
    return (
        <div className='flex border-2 border-gray-500 rounded-lg mx-auto my-0 p-3 w-1/2 mt-5 mb-5'>
           
            <div>
                <img className='rounded-lg' src={img} alt="" width={105} height={105} />
            </div>
            
            <div className='flex  ml-3  w-full justify-between'>
                <div className=' '>
                    <p>{name} </p>
                    <p>Price : ${price}</p>
                    <p>Shipping : ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='text-center  flex  items-center '>
                    <button onClick={()=> handelRemoveItem(id)} className='bg-green-200 w-14 h-14 rounded-full  hover:bg-white'>
                     <FontAwesomeIcon className='text-3xl  text-red-500' icon={faTrashAlt} />
                    </button>
                </div>
                    
             </div>
            
        </div>
    );
};

export default ReviewCart;<h2>This is review cart ..</h2>