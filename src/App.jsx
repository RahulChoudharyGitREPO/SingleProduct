import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Product from './Product'
import { SingleProduct } from './SingleProduct'
import Home from './Home'

function App() {

  return (
    <>
      <Link to='/Product'>Product</Link>
      <Link to='/Home'>Home</Link>
      <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
