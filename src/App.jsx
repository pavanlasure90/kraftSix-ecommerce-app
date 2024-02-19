import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { AuthContextProvider } from './context/AuthContext';
import 'tailwindcss/tailwind.css';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import PaymentPage from './components/Payment';
import Contact from './components/Contact';
import CheckedOut from './components/CheckedOut';
import CheckoutButton from './components/CheckoutButton';

function App() {
  return (
    <AuthContextProvider>
        <Routes>
          <Route path='/navbar' element={<Navbar />}/>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/ordered' element={<CheckedOut />} />
          <Route path='/checkoutbutton' element={<CheckoutButton />} />
        </Routes>
    </AuthContextProvider>
  );
}

export default App;
