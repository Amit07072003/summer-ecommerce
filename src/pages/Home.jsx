import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const categories = useMemo(() => ([
    {
      label: 'T-Shirts',
      images: [
        require('../img/tshirt/tshirt1.jpg'),
        require('../img/tshirt/tshirt2.jpg'),
        require('../img/tshirt/tshirt3.jpg'),
      ]
    },
    {
      label: 'Shorts',
      images: [
        require('../img/shorts/shorts1.jpg'),
        require('../img/shorts/shorts2.jpg'),
        require('../img/shorts/shorts3.jpg'),
      ]
    },
    {
      label: 'Sunglasses',
      images: [
        require('../img/sunglasses/Sunglasses1.jpg'),
        require('../img/sunglasses/Sunglasses2.jpg'),
        require('../img/sunglasses/Sunglasses3.jpg'),
      ]
    },
    {
      label: 'Sandals',
      images: [
        require('../img/sandals/sandals1.jpg'),
        require('../img/sandals/sandals2.jpg'),
        require('../img/sandals/sandals3.jpg'),
      ]
    }
  ]), []);

  const [indexes, setIndexes] = useState(Array(categories.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % categories[i].images.length)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [categories]);

  return (
    <div className="home">
      <div className="banner">
        <h1><span role="img" aria-label="sun">☀️</span> Welcome to SummerStyle!</h1>
        <p>Get ready for the sunshine with our summer collection.</p>
      </div>

      <div className="categories">
        <h2>Explore Categories</h2>
        <div className="category-list">
          {categories.map((cat, index) => (
            <Link key={index} to={`/products?category=${cat.label}`} className="category-card">
              <img
                src={cat.images[indexes[index]]}
                alt={cat.label}
                className="category-image"
              />
              <div>{cat.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
