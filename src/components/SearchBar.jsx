import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  //search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //search button 
  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="max-w-6xl mx-auto mb-6 flex justify-center gap-2">
      <input
        type="text"
        placeholder="Search products by name..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-[60%] p-2 rounded-md border border-gray-300"
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
