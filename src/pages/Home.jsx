
import Navbar from "../components/Navbar";

import Products from "../components/Products";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
          
            <div className="p-2">
           
           <Products />
            </div>
            
        </div>
    );
};

export default Home;