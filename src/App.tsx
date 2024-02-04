import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavBar}  from "./components/navbar";


function App() {
  return (
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/'/>
            <Route path='/collection'/>
            <Route path='/cart'/>
            <Route path='/contact'/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
