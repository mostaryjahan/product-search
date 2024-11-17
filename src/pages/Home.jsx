
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-2">
            {/* <Outlet /> */}
           <ProductCard />
            </div>
            
        </div>
    );
};

export default Home;