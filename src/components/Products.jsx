import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterSort from "./FilterSort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch product data
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  // Function to handle filtering
  const handleFilterChange = (type, value) => {
    let filtered = [...products];

    if (type === "category" && value) {
      filtered = filtered.filter((product) => product.category === value);
    }

    if (type === "priceRange" && value) {
      const [min, max] = value.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setFilteredProducts(filtered);
  };

  // Function to handle sorting
  const handleSortChange = (sortOption) => {
    let sorted = [...filteredProducts];

    if (sortOption === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "popularity") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(sorted);
  };

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const searchedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:flex gap-2">
        <div className="w-full md:w-[20%]">
        <SearchBar onSearch={handleSearch} />
      <FilterSort
        categories={categories}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
        </div>
        <div className="w-full md:w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
        </div>
      </div>

    
     
    </div>
  );
};

export default Products;
