
const ProductDetails = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
            <p className="text-lg font-bold text-gray-900 mb-2">${product.price.toFixed(2)}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-yellow-500 font-medium">
                Rating: {product.rating} ★
              </span>
              <span className="text-sm text-gray-600">Popularity: {product.popularity}</span>
            </div>
            <button
              className="mt-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              onClick={() => onViewDetails(product.id)}
            >
              View Details
            </button>
          </div>
        </div>
      );
    };
    

export default ProductDetails;