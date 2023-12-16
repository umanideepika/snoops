// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Navigate to the product page with the exact search term
    navigate(`/product/${searchTerm}`);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="centered-search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ProductList />
    </div>
  );
};

export default App;
