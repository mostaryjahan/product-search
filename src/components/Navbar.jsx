import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#145240] text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
        <a href="/" className="sm:text-xl text-sm font-semibold">
          Product Gallery
        </a>
        {/* Hamburger Icon for mobile view */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4 ">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Contact Us</a>
          <button className="border-1 rounded-md px-4 py-2 bg-[#25bd92]">Login</button>
        </div>
      </div>

      {/* Mobile Menu - visible when hamburger is clicked */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden mt-2`}>
        <div className="flex flex-col space-y-2">
          <a href="" className="block">Home</a>
          <a href="" className="block">Products</a>
          <a href="" className="block">Contact Us</a>
          <button className="border-2 rounded-md px-4 py-2">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
