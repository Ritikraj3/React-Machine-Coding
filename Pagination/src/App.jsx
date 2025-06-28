import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";

import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return !products.length === 0 ? (
    <h1> 'No Product Found' </h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <Pagination currentPage={currentPage} noOfPages={noOfPages} setCurrentPage = {setCurrentPage} />
      <div className="products-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default App
