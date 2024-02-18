import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavBar}  from "./modules/navbar";
import {Footer}  from "./modules/footer";
import {Home}  from "./pages/home";


function App() {
  return (
      <div className="App">
        <Router>
          <NavBar />
          <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery'/>
            <Route path='/cart'/>
            <Route path='/contact'/>
          </Routes>
          </main>
          <Footer/>
        </Router>
      </div>
  )
}

export default App
