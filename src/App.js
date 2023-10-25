import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Shop  from './pages/shop/Shop';
import Cart from './pages/cart/Cart'
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Shopping Website</h1>
      </div>
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/mega-deals" />
          <Route path="/Shop" element= {<Shop/>} />
          <Route path="cart" element= { <Cart />} />
        </Routes>
      </Router>
      <div>
        {/* <Carousel /> */}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
