import "./App.css";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from './components/PrivateRoute'
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import { laptopData } from "./data/laptopData";
import { phonesData } from "./data/phoneData";
import { headphonesData } from "./data/headphoneData";
import CartPage from "./pages/CartPage";
import toast from "react-hot-toast";
function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [products,setProducts] = useState([...laptopData,...phonesData,...headphonesData])
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Item Added Successfully!")
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return(
    <div className="w-screen h-screen bg-white flex flex-col overflow-auto">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path='/' element={<Home products={products} setProducts={setProducts} />} ></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} ></Route>
        <Route path="/about" element={<About/>}></Route>
    {/*We want if user is loggin in ,then only it can go to dashboard  */}
        <Route path='/contact' element={
          <PrivateRoute isLoggedIn = {isLoggedIn}>
            <Contact/>
          </PrivateRoute>
        } >
        </Route>

        <Route path="/product/:id" element={<ProductPage products={products} addToCart={addToCart}/>}></Route>
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>}></Route>
      </Routes>

    </div>
  )
}

export default App;
