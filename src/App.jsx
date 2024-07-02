import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Sucess from './Pages/Sucess'
import Error from './Pages/Error'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sucess' element={<Sucess/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
