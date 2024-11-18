import  { useState } from 'react';
import { ImCross } from "react-icons/im";


const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow-md h-full flex flex-col justify-between">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-700 mb-1">{product.description}</p>
        <span className="text-sm font-bold text-blue-600">${product.price}</span>

        <button
          onClick={handleShowDetails}
          className="mt-4 flex justify-center items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-1 rounded transition-colors"
        >
          View Details
        </button>
      </div>

      {/* Modal*/}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-800">
              <ImCross />
              </button>
            </div>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-sm text-gray-600 mb-4">Rating: {product.rating} ★</p>
            <span className="text-lg font-bold text-blue-600">${product.price}</span>
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;


