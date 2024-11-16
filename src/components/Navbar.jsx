import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className=" mx-auto flex items-center justify-center gap-8">
          <a href="/" className="text-xl font-semibold">Product Gallery</a>
          <div>
          <Link to='allProducts'> All Products</Link>
          </div>
          
        </div>
      </nav>
    );
};

export default Navbar;