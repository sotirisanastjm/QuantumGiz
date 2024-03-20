import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import {NavBar}  from './modules/navbar';
import {Footer}  from './modules/footer';
import {Home}  from './pages/home';
import {Products} from './pages/Products';
import {Notfound} from  './pages/404';
import {ProductInfo}  from './modules/ProductInfo';
import { CartProvider } from './context/CartContext';
import {Cart} from './pages/cart';
import {Contact} from './pages/contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
      <div className="App">
        <CartProvider>
          <Router>
            <NavBar />
            <ScrollToTop />
            <main>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/product-info/:name' element={<ProductInfo/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path="*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer/>
          </Router>
        </CartProvider>
      </div>
  )
}

export default App
