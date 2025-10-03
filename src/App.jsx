import Accesorios from './components/Accesorios';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import './main.css';
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div className="app-wrapper">      {/* <-- nuevo */}
        <Navbar />
        <main className="main-content">  {/* <-- nuevo */}
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/productos/:categoria' element={<ItemListContainer/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;