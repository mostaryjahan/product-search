import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterSort from "./FilterSort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, []);

  // Function to handle filtering
  const handleFilterChange = (type, value) => {
    let filtered = [...products];

    if (type === "category" && value) {
      filtered = filtered.filter((product) => product.category === value);
    }

    if (type === "priceRange") {
      const { min, max } = value;
      filtered = filtered.filter((product) => {
        const minPrice = min ? Number(min) : 0;
        const maxPrice = max ? Number(max) : Infinity;
        return product.price >= minPrice && product.price <= maxPrice;
      });
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
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#145240] border-solid"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="">
      
          <SearchBar onSearch={handleSearch} />
          <FilterSort
            categories={categories}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
       
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
     
      </div>
    </div>
  );
};

export default Products;
