import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
          setFilteredProducts(response.data.products);
        } else {
          console.error('Products array not found in response data');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(product => {
      return product.title.toLowerCase().includes(term);
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="">
      <Navbar />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
      />
      <h1 className="text-3xl font-bold mt-4 mb-4 ml-5"><i style={{ color: "purple" }}>Shop Now!</i></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 " style={{ margin: "1rem" }}>
        {filteredProducts.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" style={{ height: '450px' }}>
            <img className="w-full h-48 object-cover mb-4" src={product.thumbnail} alt="" />
            <h1 className="font-bold text-lg mt-2">{product.title}</h1>
            <h2 className="text-base font-semibold mb-2">{product.name}</h2>
            <p className="text-black mb-2" style={{ color: "purple", fontWeight: "bold" }}>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-gray-900 bg-gradient-to-r from-cyan-600 via-blue-300 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-red-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
