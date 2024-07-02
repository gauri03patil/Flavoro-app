import {configureStore} from '@reduxjs/toolkit'
// import Cart from '../Components/Cart'
import CartSlice from './Slice/CartSlice'
import CategorySlice from './Slice/CategorySlice'
import SearchSlice from './Slice/SearchSlice'

 const Store = configureStore({
    reducer:{
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice
    }
})


export default Store

