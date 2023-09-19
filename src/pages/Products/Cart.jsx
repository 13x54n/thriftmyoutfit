import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl mb-6">Shopping Cart</h1>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-2/3 px-2">
          <h2 className="text-2xl mb-4">Cart Items</h2>
          <div className="border-b mb-4 pb-4">
            <div className="flex flex-wrap justify-between items-center">
              <img className="w-16 h-16 object-cover md:w-20 md:h-20" src="https://via.placeholder.com/150" alt="Product 1" />
              <span className="flex-1 ml-4">Item 1</span>
              <span className="md:text-lg">$10.00</span>
              <button className="text-red-500 hover:text-red-700 md:text-lg">Remove</button>
            </div>
          </div>
          <div className="border-b mb-4 pb-4">
            <div className="flex flex-wrap justify-between items-center">
              <img className="w-16 h-16 object-cover md:w-20 md:h-20" src="https://via.placeholder.com/150" alt="Product 2" />
              <span className="flex-1 ml-4">Item 2</span>
              <span className="md:text-lg">$20.00</span>
              <button className="text-red-500 hover:text-red-700 md:text-lg">Remove</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <h2 className="text-2xl mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>$30.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>$2.40</span>
          </div>
          <div className="flex justify-between mb-4 font-bold">
            <span>Total</span>
            <span>$32.40</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
