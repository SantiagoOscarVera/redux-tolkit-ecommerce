import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseAmount } from '../features/basketSlices';

const Product = ({name, amount, image, price, total}) => {
    const dispatch = useDispatch();

    return (
        <div className='flex justify-center flex-row items-center gap-8 px-10'>
            <img src={image} alt={name + "glasses"} className="w-40" />
            <div className='w-1/2 px-10'>
                <p className='text-xl font-medium' >{name}</p>
                <p className='text-lg tracking-wide'>${price.toFixed(2)}</p>
                <button className='text-red-500 tracking-wide pt-1 pb-3'>Remove</button>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-lg font-medium'>Amount</p>
                <div className='flex flex-row items-center gap-4 text-gray-600 font-medium'>
                    <button className='text-xl'>-</button>
                    <p>{amount}</p>
                    <button className='text-xl'
                    onClick={()=>{dispatch(increaseAmount({name}) )}}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Product;