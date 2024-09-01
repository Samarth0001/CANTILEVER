import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosTrash } from 'react-icons/io';

const CartPage = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price.replace(/,/g, '')), 0).toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-3xl h-full translate-y-3/4">Your cart is empty. <Link to="/" className="text-blue-500">Continue shopping</Link></p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((product, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <img src={product.images[0]} alt={`${product.type} image`} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{product.details.modelName}</h2>
                    <p className="text-gray-600">₹ {product.price}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="text-red-600 hover:text-red-800">
                  <IoIosTrash size={24} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-bold text-gray-800">Total: ₹ {calculateTotal()}</p>
            <button className="bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors ml-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;