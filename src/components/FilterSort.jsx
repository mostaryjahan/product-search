import { useState } from 'react';

const FilterSort = ({ categories = [], onFilterChange, onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Handle changes for category filter
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange('category', e.target.value);
  };

  // Handle changes for price range filter
  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
    onFilterChange('priceRange', e.target.value);
  };

  // Handle changes for sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-md mb-6 flex justify-between items-center">
      {/* Category Filter */}
      <div className="flex items-center gap-4">
        <label htmlFor="category" className="text-gray-700 font-medium">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded-md p-2"
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
      <div className="flex items-center gap-4">
        <label htmlFor="priceRange" className="text-gray-700 font-medium">Price Range:</label>
        <select
          id="priceRange"
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
          className="border rounded-md p-2"
        >
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>

      {/* Sorting Options */}
      <div className="flex items-center gap-4">
        <label htmlFor="sort" className="text-gray-700 font-medium">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleSortChange}
          className="border rounded-md p-2"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
