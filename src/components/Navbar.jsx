const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          <a href="/" className="sm:text-xl text-xs font-semibold">Product Gallery</a>
          <div className="space-x-4">
           <a href="">Home</a>
           <a href="">Products</a>
           <a href="">Contact Us</a>
           <button className="border-2 rounded-md px-4 py-2">Login</button>
          </div>
          
        </div>
      </nav>
    );
};

export default Navbar;