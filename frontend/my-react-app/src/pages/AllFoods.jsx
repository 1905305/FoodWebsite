/*

import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../pages/foods/Food.css";
import "../styles/pagination.css";

const Foods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [backendData, setBackendData] = useState([]);
  const [error, setError] = useState(null); // State to hold the error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/products"); // Fetch data from the API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBackendData(data); // Set the fetched data to the state
      } catch (error) {
        setError(error.message); // Set the error state
      }
    };

    fetchData();
  }, []);

  const handleAddFood = (item) => {
    // Handle adding food to cart here
    console.log("Adding food to cart:", item);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {backendData.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <div className="food">
                  <img src={item.img} width="15%" alt="" />
                  <p className="food-name">{item.name}</p>
                  <div className="food-footer">
                    <span className="food-price">Rs. {item.price}</span>
                    <span>Delivery free</span>
                  </div>
                  <button
                    className="add-food"
                    onClick={() => handleAddFood(item)}
                  >
                    Add
                  </button>
                </div>
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={Math.ceil(backendData.length / 12)} // Assuming 12 items per page
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(selected) => console.log(selected)}
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Foods;

*/
import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import axios from "axios";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { DiningSharp, EmojiFoodBeverage } from "@mui/icons-material";
import "../pages/shop/Shop.css";
import "../pages/foods/Food.css";
import "../styles/pagination.css";

const Foods = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [backendData, setBackendData] = useState(data);
  const [error, setError] = useState(null); // State to hold the error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/products"); // Fetch data from the API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBackendData(data); // Set the fetched data to the state
      } catch (error) {
        setError(error.message); // Set the error state
      }
    };

    fetchData();
  }, []);

  const handleAddFood = (item) => {
    // Handle adding food to cart here
    console.log("Adding food to cart:", item);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {backendData.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <div className="food">
                  <img src={item.img} width="15%" alt="" />
                  <p className="food-name">{item.name}</p>
                  <div className="food-footer">
                    <span className="food-price">Rs. {item.price}</span>
                    <span>Delivery free</span>
                  </div>
                  <button
                    className="add-food"
                    onClick={() => handleAddFood(item)}
                  >
                    Add
                  </button>
                </div>
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={Math.ceil(backendData.length / 12)} // Assuming 12 items per page
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(selected) => console.log(selected)}
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const AllFood = () => {
  const [product, setProduct] = useState([]);
  const [foodOnly, setFoodOnly] = useState([]);
  const [beveragesOnly, setBeveragesOnly] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://https://food-website-omega-ten.vercel.app/:3001/api/products"
        );
        setProduct(response.data);
        setFoodOnly(response.data.filter((item) => item.category === "food"));
        setBeveragesOnly(
          response.data.filter((item) => item.category === "beverages")
        );
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong!!");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="latest-nav">
          <div
            onClick={() => setProduct(foodOnly.concat(beveragesOnly))}
            className="category-text"
          >
            <FoodBankIcon />
            <span>All</span>
          </div>
          <div onClick={() => setProduct(foodOnly)} className="category-text">
            <DiningSharp />
            <span>Food</span>
          </div>
          <div
            onClick={() => setProduct(beveragesOnly)}
            className="category-text"
          >
            <EmojiFoodBeverage />
            <span>Drinks</span>
          </div>
        </div>
        <Foods data={product} />
      </div>
    </>
  );
};

export default AllFood;
