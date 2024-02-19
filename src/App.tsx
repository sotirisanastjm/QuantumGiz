import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavBar}  from "./modules/NavBar";
import {Footer}  from "./modules/footer";
import {Home}  from "./pages/home";
import {Products} from "./pages/Products";
import {Notfound} from  "./pages/404";
import {ProductInfo}  from "./modules/ProductInfo";
import {BestSellers} from "./modules/BestSellers"

function App() {
  return (
      <div className="App">
        <Router>
          <NavBar />
          <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/product-info/:name' element={<ProductInfo/>}/>
            <Route path='/cart'/>
            <Route path='/contact'/>
            <Route path="*" element={<Notfound />} />
          </Routes>
          </main>
          <Footer/>
        </Router>
      </div>
  )
}

export default App
