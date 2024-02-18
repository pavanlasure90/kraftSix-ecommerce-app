import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate() 

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setCartProducts(products);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      } 
    };

    fetchCartProducts();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      const productIdString = productId.toString();
      // Delete the product document from Firestore
      await deleteDoc(doc(db, 'products', productIdString));
      
      // Update the UI by filtering out the removed product from cartProducts state
      setCartProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
      console.log("Product removed from database");
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleBuyNow = () =>{
    navigate('/payment')
  }
  

  return (
    <div className="container">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4" style={{textAlign:"center"}}>Cart Items</h1>
      {cartProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4" style={{margin:"1.3rem"}}>
          {cartProducts.map((product, index) => (
            <div key={index} className="border p-4">
              <img src={product.thumbnail} alt="" className="w-full mb-2" />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">ID: {product.id}</p>
              <p className="text-black mb-2">Description: {product.description}</p>
              <p className="text-purple-600 mb-2">Price: ${product.price}</p>
              <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2">Remove</button>
              <button onClick={handleBuyNow} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
}

export default Cart;
