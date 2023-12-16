// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductDetailPage from './ProductDetailPage'; // Import the new component
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* Add a Route for the ProductDetailPage */}
      <Routes>
        <Route path="/product/:id" element={<ProductDetailPage products={products} />} />
      </Routes>
    </div>
  );
};

export default ProductList;
