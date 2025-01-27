import { useState, useContext } from 'react';
import Item from './components/Item';
import Cart from './components/Cart';
import { CartContext} from './contexts/CartContext';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'

function App() {
  const cart = useContext(CartContext);
  const totalCartCount = cart.items.length;

  return (   
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart({totalCartCount})</Link>
        </nav>
        
        <h1>Shopping Cart App with Context API</h1>
        {/* Routes */}
        <Routes>
          <Route path ="/" element ={<div className="item-list">
                <Item name="MacBook" price={20000} />
                <Item name="Pen Drive" price={400} />
                <Item name="Mobile" price={1500} />
              </div>} />
         <Route path="/cart" element ={<Cart/>} />

        </Routes>
      </div>
    </Router>
   
  )
  
}

export default App
