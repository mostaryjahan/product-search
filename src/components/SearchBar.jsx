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
        className="w-[60%] p-2 rounded-md border border-gray-400"
      />
      <button
        onClick={handleSearchClick}
        className="bg-[#145240] text-white p-2 rounded-md hover:bg-[#25bd92] transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
