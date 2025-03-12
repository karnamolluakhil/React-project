import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import { searchProducts } from "../api/ebayService";

const Home = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchProducts(query);
    setProducts(results);
  };

  return (
    <div>
      <h1>eBay Product Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
