import React, { useState, useEffect } from 'react';
import {BrowserRouter as  Router, Routes, Link, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import './App.css';
import './dog.jpg';

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
      const jsonData = await response.json();
      setImages(jsonData.message);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div className='dog-img'>
      <div className='nav-bar'>
        <img  className='logo' src={require('./dog.jpg')} />
      <h1>Random Dog Images Generator <span>(Click on a Image to see details)</span></h1>
      </div>
      
      
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <Link to= "/Details">
              <img src={image} alt={`Dog ${index}`} />
            </Link>
          </li>
        ))}
      </ul>

      <footer>
                <p>Created by Luka Dužaić</p>
            </footer>
    </div>
  );
}

  function App (){
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Details" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
