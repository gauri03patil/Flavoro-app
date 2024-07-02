import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slice/CartSlice';

const FoodCart = ({id, name, price, desc, img, rating, handleToast}) => {

  const dispatch = useDispatch();
    
  return (
    <div className='w-[250px] bg-white p-5 flex flex-col rounded-lg'>
        <img src={img} alt="pizza-1"
        className=' mb-3 w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
        <div className='flex justify-between'>
            <h3 className='mb-3'>{name}</h3>
            <span className='text-green-500'>₹{price}</span>
        </div>
        <p className=' pb-2 text-sm font-normal'>{desc.slice(0, 50)}...</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center '>
            <AiFillStar className="mr-1 text-yellow-400" />{rating}
            </span>
            <button onClick={()=>{
              dispatch(addToCart({id, name, price, rating, img, qty:1})
              );
              handleToast(name)
              
            }} className='p-1 bg-green-400 text-white hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCart
