import { useState } from 'react';

const FilterSort = ({ categories = [], onFilterChange, onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Category filter
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange('category', e.target.value);
  };

  // For custom price range filter
  const handlePriceChange = () => {
    onFilterChange('priceRange', { min: minPrice, max: maxPrice });
  };

  // For sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="mx-auto p-2 mb-6 ">
      <div className="lg:flex gap-4 justify-between items-center">
        {/* Category Filter */}
        <div className="flex-1 flex items-center gap-2 sm:gap-4">
          <label htmlFor="category" className="text-gray-700 font-medium">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border rounded-md p-2 w-full sm:w-auto"
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex-1 flex gap-1 sm:flex-row items-center">
          <label className="text-gray-700 font-medium ">Price:</label>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border rounded-md p-2 w-1/3 sm:w-auto"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border rounded-md p-2 w-1/3 sm:w-auto"
          />
          <button
            onClick={handlePriceChange}
            className="bg-[#145240] text-white rounded-md px-4 py-2"
          >
            Apply
          </button>
        </div>

        {/* Sorting Options */}
        <div className="flex-1 flex items-center gap-2 sm:gap-4">
          <label htmlFor="sort" className="text-gray-700 font-medium">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded-md p-2 w-full sm:w-auto"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
