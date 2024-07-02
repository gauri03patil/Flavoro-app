import React, { useEffect, useState } from 'react'
import FoodData from '../FoodData'
import {useDispatch, useSelector} from 'react-redux'
// import { setCategory } from '../redux/Slice/CategorySlice'
import { setCategory } from '../redux/Slice/CategorySlice'

const CategoryMenu = () => {

  const [Categories, setCategories] = useState([]);

  const listUniqueCategories = ()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=> food.category)) ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(()=>{
    listUniqueCategories();
    
  }, [])
 
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state)=> state.category.category)

  return (
    <div>
        <h3 className='px-5 font-semibold font-bold'>Find the best food</h3>
        <div className='my-5 mx-5 flex gap-3 overflow-x-scroll scroll-smooth 
        lg:overflow-x-hidden'>
        <button 
              onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
              </button>
           {
            Categories.map((category, index)=> {
              return <button 
             onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
              </button>
 
            })
           }
        </div>
    </div>
  )
}

export default CategoryMenu
