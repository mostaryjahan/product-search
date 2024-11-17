import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/fakedata.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))

    }, []);

    return (
        <div className="max-w-5xl mx-auto">
           <h1> All Products are here......</h1>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
           {products.map((product, index) => (
          <ProductCard key= {index} product={product}/>
        ))}

           </div>
        </div>
    );
};

export default Products;