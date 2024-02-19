import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { auth } from '../firebase'; 


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchSimilarProducts = async () => {
      try {
        const productResponse = await axios.get(`https://dummyjson.com/products/${id}`);
        const selectedProduct = productResponse.data;

        const categoryResponse = await axios.get(`https://dummyjson.com/products?category=${selectedProduct.category}`);
        if (Array.isArray(categoryResponse.data.products)) {
          const similarProducts = categoryResponse.data.products.filter(product => product.id !== id);
          setSimilarProducts(similarProducts.slice(0, 8)); 
        } else {
          console.error('Products array not found in category response data');
        }
      } catch (error) {
        console.error('Error fetching similar products:', error);
      }
    };

    if (id) {
      fetchProductDetails();
      fetchSimilarProducts();
    }
  }, [id]);


const addToCart = async () => {
  try {
    const user = auth.currentUser; 
    if (user && product) {
      const userId = user.uid; 
      const cartRef = doc(db, 'userCarts', userId); 
      const cartDoc = await getDoc(cartRef); 

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        const updatedProducts = [...cartData.products, product]; 
        await setDoc(cartRef, { products: updatedProducts }, { merge: true }); 
      } else {
        await setDoc(cartRef, { products: [product] }); 
      }
      console.log('Product added to cart successfully');
      alert("Product added to Cart");
      navigate('/cart'); 
    } else {
      console.error('User not logged in or product not found');
      alert("Please Login")
    }
  } catch (error) {
    console.error('Error adding product to cart:', error);
  }
};

  return (
    <div className="">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 mt-4 ml-5" style={{ color: "purple" }}><i>Product Details</i></h1>
      {product && (
        <div style={{ margin: "1rem" }}>
          <img src={product.thumbnail} alt="" />
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">ID: {product.id}</p>
          <p className="text-black mb-2">Description: {product.description}</p>
          <p className="text-purple-600 mb-2">Price: ${product.price}</p>
          <button
            onClick={addToCart}
            className="text-gray-900 bg-gradient-to-r from-cyan-600 via-blue-300 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-red-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add to Cart
          </button>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4 ml-5">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {similarProducts.map((similarProduct, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <img src={similarProduct.thumbnail} alt="" />
            <h2 className="text-lg font-semibold mb-2">{similarProduct.title}</h2>
            <p className="text-gray-600 mb-2">Price: ${similarProduct.price}</p>
            <Link to={`/product/${similarProduct.id}`} className="text-gray-900 bg-gradient-to-r from-cyan-600 via-blue-300 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-red-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
