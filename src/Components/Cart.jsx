import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';

const Cart = () => {

  const cartItems = useSelector((state)=> state.cart.cart)
  // console.log(cartItems);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((total, item) => total +  item.qty * item.price, 0)


  const [activeCart, setActiveCart] = useState(false)
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white transform transition-transform ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`}>
      <div className='flex justify-between items-center my-3'>
        <span className='text-xl font-bold text-gray-800'>My order</span>
        <IoMdClose onClick={()=> setActiveCart(!activeCart)} className='border-gray-600 text-gray-600 font-bold border-2 hover:text-red-300 hover:border-red-300 cursor-pointer'/>
       </div>
       {cartItems.length >0 ? 
        cartItems.map((food)=>{
         return <ItemCart
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
          qty={food.qty}
         />
        }) : <h2 className='text-center text-xl font-bold '>Your cart is empty</h2>
       }
       
       <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount: {totalPrice} </h3>
        <hr className='w-[90vw] lg;w-[18vw] my-2' />
        <button className='py-2 border-2 font-bold bg-green-500 text-white rounded-lg px-3  w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
      </div>
      </div>
      <FaShoppingCart onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
          />
      
    </>
  )
}

export default Cart
