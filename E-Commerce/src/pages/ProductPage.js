import React from 'react';
import { useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import ImageCarousel from '../components/ImageCarousel';

const ProductPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) return <div>Product not found</div>;

  const totalStars = 5;

  return (
    <div className="max-w-6xl mx-auto p-4 mt-[100px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className="flex-1">
          {/* Replace the single image with the ImageCarousel component */}
          <ImageCarousel images={product.images} />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{product.details.modelName}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-semibold text-green-600">₹ {product.price}</p>
            <div className="flex">
              {
                [...Array(product.rating)].map((_, index) => (
                  <IoIosStar key={index} color="yellow" size={24} />
                ))
              }
              {
                [...Array(totalStars - product.rating)].map((_, index) => (
                  <IoIosStarOutline key={index} color="yellow" size={24} />
                ))
              }
            </div>
          </div>
          <div className="space-y-2">
            <p className='font-semibold text-lg'>Product Details</p>
            {Object.entries(product.details).map(([key, value]) => (
              <p key={key} className="text-gray-600">
                <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span> {value}
              </p>
            ))}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {
            product.reviews.map((review, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                <img src={`https://via.placeholder.com/50`} alt="user-icon" className="w-12 h-12 rounded-full"/>
                <p className="text-gray-800">{review}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
