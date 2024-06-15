import Accesorios from './components/Accesorios';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import './main.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
    <CartProvider>
      <BrowserRouter>
         <Navbar/>

           <Routes>
             <Route path='/' element={<ItemListContainer/>} />
             <Route path='/item/:id' element={<ItemDetailContainer/>} />
             <Route path='/productos/:categoria' element={<ItemListContainer/>} />
             <Route path='/contacto' element={<Contacto/>} />
             <Route path='/carrito' element={<Carrito/>} />
             <Route path="/checkout" element={<Checkout />}/>
             {/* <Route path='/accesorios' element={<Accesorios />} /> */}
             </Routes>
      </BrowserRouter>
    </CartProvider> 
    </div>
  )
}

export default App
