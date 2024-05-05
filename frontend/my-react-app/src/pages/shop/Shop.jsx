import { useState, useEffect } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
//import BreadIcon from "@mui/icons-material/Bread";
import "./Shop.css";

import axios from "axios";
import Foods from "../foods/Food";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://food-website-6z5i.vercel.app/api/products`
        );
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        console.log("Something went wrong!!");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filterByCategory = (category) => {
    const filteredProducts = product.filter(
      (item) => item.category === category
    );
    setProduct(filteredProducts);
  };

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="latest-nav">
          <div onClick={() => setProduct(product)} className="category-text">
            <FastfoodIcon />
            <span onClick={() => filterByCategory("burger")}>Burger</span>
          </div>
          <div onClick={() => setProduct(product)} className="category-text">
            <LocalPizzaIcon />
            <span onClick={() => filterByCategory("pizza")}>Pizza</span>
          </div>
        </div>
        <Foods data={product} />
      </div>
    </>
  );
};

export default Shop;
