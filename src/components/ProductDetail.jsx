import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/cartcontext';
import '../styles/productdetail.css';

const sampleProducts = [
  {
    id: 1,
    name: 'Cool Summer T-Shirt',
    price: 499,
    category: 'T-Shirts',
    images: [
      'https://m.media-amazon.com/images/I/514vCNWtZDL._SX569_.jpg',
      'https://m.media-amazon.com/images/I/61uWwgp-RUL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/71Xe7yD+3BL._SY741_.jpg'
    ]
  },
  {
    id: 5,
    name: 'Cool Summer T-Shirt',
    price: 99,
    category: 'T-Shirts',
    images: [
            'https://m.media-amazon.com/images/I/51CqaBPnMnL._SY550_.jpg',
            'https://m.media-amazon.com/images/I/71BsT63kW0L._SY550_.jpg',
            'https://m.media-amazon.com/images/I/619Xeh96bML._SY741_.jpg'
    ]
  },
  {
    id: 6,
    name: 'Cool Summer T-Shirt',
    price: 999,
    category: 'T-Shirts',
    images: [
            'https://m.media-amazon.com/images/I/71LLwVdmsfL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/81jyH+KIg5L._SY741_.jpg',
            'https://m.media-amazon.com/images/I/71LLwVdmsfL._SY741_.jpg'
    ]
  },
  {
    id: 7,
    name: 'Cool Summer T-Shirt',
    price: 500,
    category: 'T-Shirts',
    images: [
            'https://m.media-amazon.com/images/I/61R7Gpp4jLL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61lVMnL7FmL._SY550_.jpg',
            'https://m.media-amazon.com/images/I/71kkmWfJuAL._SY550_.jpg'
    ]
  },
  {
    id: 8,
    name: 'Cool Summer T-Shirt',
    price: 50,
    category: 'T-Shirts',
    images: [
            'https://m.media-amazon.com/images/I/61EC9KyoGNL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/71EtLxPYVLL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61A90GDHmLL._SY741_.jpg'
    ]
  },
  {
    id: 2,
    name: 'Stylish Sunglasses',
    price: 899,
    category: 'Sunglasses',
    images: [
      'https://m.media-amazon.com/images/I/41ydSAue6DL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/51DIy0J5aWL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/51jvAT6CJvL._SX679_.jpg'
    ]
  },
  {
    id: 9,
    name: 'Stylish Sunglasses',
    price: 999,
    category: 'Sunglasses',
    images: [
      "https://m.media-amazon.com/images/I/41yqM8NP0qL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41TB36voUIL._SX522_.jpg",
  "https://m.media-amazon.com/images/I/71fya+og8OL._SX522_.jpg"
  
  
    ]
  },
  {
    id: 10,
    name: 'Stylish Sunglasses',
    price: 1200,
    category: 'Sunglasses',
    images: [
"https://m.media-amazon.com/images/I/51Cy+NbEeaL._SX522_.jpg",
"https://m.media-amazon.com/images/I/515iP8cfJ8L._SX522_.jpg",
"https://m.media-amazon.com/images/I/71159qZNtxL._SX522_.jpg"
    ]
  },
  {
    id: 11,
    name: 'Stylish Sunglasses',
    price: 1500,
    category: 'Sunglasses',
    images: [
"https://m.media-amazon.com/images/I/513ObYdySoL._SX522_.jpg",
"https://m.media-amazon.com/images/I/515DtL0icvL._SX522_.jpg",
"https://m.media-amazon.com/images/I/7184E8TSKDL._SX522_.jpg"
    ]
  },
  {
    id: 12,
    name: 'Stylish Sunglasses',
    price: 899,
    category: 'Sunglasses',
    images: [
"https://m.media-amazon.com/images/I/61xbGkFmwvL._SX679_.jpg",
"https://m.media-amazon.com/images/I/617Ho6IftKL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61WvQXicdRL._SX679_.jpg"
    ]
  },
  {
    id: 3,
    name: 'Comfy Shorts',
    price: 699,
    category: 'Shorts',
    images: [
      'https://m.media-amazon.com/images/I/71qJNrZhd1L._SY741_.jpg',
      'https://m.media-amazon.com/images/I/71XqmFf5nTL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/716afLOJJ2L._SY741_.jpg'
    ]
  },
  {
    id: 13,
    name: 'Comfy Shorts',
    price: 99,
    category: 'Shorts',
    images: [
"https://m.media-amazon.com/images/I/51zHaCetV9L._SY741_.jpg",
"https://m.media-amazon.com/images/I/51jc+KPp3XL._SY741_.jpg",
"https://m.media-amazon.com/images/I/51Eo0o4z24L._SY741_.jpg"
    ]
  },
  {
    id: 14,
    name: 'Comfy Shorts',
    price: 99,
    category: 'Shorts',
    images: [
"https://m.media-amazon.com/images/I/71BBv6zE1tL._SX679_.jpg",
"https://m.media-amazon.com/images/I/81iBplOrt6L._SX679_.jpg",
"https://m.media-amazon.com/images/I/71Cqr+kV2cL._SX679_.jpg"
    ]
  },
  {
    id: 15,
    name: 'Comfy Shorts',
    price: 69,
    category: 'Shorts',
    images: [
"https://m.media-amazon.com/images/I/81i3WMQJ1tL._SY741_.jpg",
"https://m.media-amazon.com/images/I/61x6q44VrqL._SY741_.jpg",
"https://m.media-amazon.com/images/I/719AK+CddvL._SY741_.jpg"
    ]
  },
  {
    id: 16,
    name: 'Comfy Shorts',
    price: 300,
    category: 'Shorts',
    images: [
     "https://m.media-amazon.com/images/I/715iIN+aKtL._SY741_.jpg",
     "https://m.media-amazon.com/images/I/7149Ezk8-EL._SY741_.jpg",
     "https://m.media-amazon.com/images/I/61U-HJoBwWL._SY741_.jpg"
    ]
  },
  {
    id: 4,
    name: 'Beach Sandals',
    price: 799,
    category: 'Sandals',
    images: [
      'https://m.media-amazon.com/images/I/71GGYSEHR3L._SY695_.jpg',
      'https://m.media-amazon.com/images/I/81VCYc1kW6L._SY695_.jpg',
      'https://m.media-amazon.com/images/I/81H5Pyc66dL._SY695_.jpg'
    ]
  },
  {
    id: 17,
    name: 'Beach Sandals',
    price: 949,
    category: 'Sandals',
    images: [
"https://m.media-amazon.com/images/I/716UUHVCcXL._SY695_.jpg",
"https://m.media-amazon.com/images/I/61LPixj0peL._SY695_.jpg",
"https://m.media-amazon.com/images/I/612jANK4otL._SY695_.jpg"
    ]
  },
  {
    id: 18,
    name: 'Beach Sandals',
    price: 299,
    category: 'Sandals',
    images: [
  "https://m.media-amazon.com/images/I/51p0u1pv2DL._SY695_.jpg",
  "https://m.media-amazon.com/images/I/71C-NesPuXL._SY695_.jpg",
  "https://m.media-amazon.com/images/I/71OaSEF4WbL._SY695_.jpg"
    ]
  },
  {
    id: 19,
    name: 'Beach Sandals',
    price: 2024,
    category: 'Sandals',
    images: [
  "https://m.media-amazon.com/images/I/71xhps7xYmL._SX695_.jpg",
  "https://m.media-amazon.com/images/I/71ydd6Nx-RL._SX695_.jpg",
  "https://m.media-amazon.com/images/I/71PYKatgfIL._SX695_.jpg"
    ]
  },
  {
    id: 20,
    name: 'Beach Sandals',
    price: 949,
    category: 'Sandals',
    images: [
"https://m.media-amazon.com/images/I/71z6J63QClL._SY695_.jpg",
"https://m.media-amazon.com/images/I/61sFSmwXPyL._SY695_.jpg",
"https://m.media-amazon.com/images/I/51ZoF0xWIuL._SY695_.jpg"
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const productId = parseInt(id);
  const product = sampleProducts.find(p => p.id === productId);

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div className="product-detail"><p>Product not found.</p></div>;
  }

  return (
    <div className="product-detail">
      <div className="image-gallery">
        <div className="thumbnails">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setMainImage(img)}
              className={mainImage === img ? 'active' : ''}
            />
          ))}
        </div>
        <div className="main-image">
          {mainImage && <img src={mainImage} alt={product.name} />}
        </div>
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
