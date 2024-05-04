import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
//import MarqueeImages from "../pages/movingimages.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Efficient shipping for your convenience",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Savor delicious meals in a cozy ambiance",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Effortless retrieval for your orders.",
  },
];

// HERE YOU CAN MAKE A  IMAGE SLIDER -----------------------
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "DELHI") {
      const filteredProducts = products.filter(
        (item) => item.category === "DELHI"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "MUMBAI") {
      const filteredProducts = products.filter(
        (item) => item.category === "MUMBAI"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BANGLORE") {
      const filteredProducts = products.filter(
        (item) => item.category === "BANGLORE"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "HYDERABAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "HYDERABAD"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);
  //------------------------------------------------------------------
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  "Hunger waits for no one. At Quickbite Express, we're here to
                  satisfy your cravings anytime, anywhere. Order online and
                  enjoy timely delivery of delicious meals. From our kitchen to
                  your doorstep, savor piping hot, mouthwatering dishes crafted
                  to delight your taste buds."
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                "We'll bring delicious meals straight to your door."
              </p>
              <p className="feature__text">
                "Relax at home while we take care of your cravings. Enjoy
                hassle-free ordering and timely delivery, bringing delicious
                meals straight to your doorstep."
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Explore Our Resturants in your City </h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DELHI" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DELHI")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  DELHI
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "MUMBAI" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("MUMBAI")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  MUMBAI
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BANGLORE" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BANGLORE")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  BANGLORE
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "HYDERABAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("HYDERABAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  HYDERABAD
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Quickbite Express</span>
                </h2>
                <p className="tasty__treat-desc">
                  "Quickbite Express: Your savory satisfaction destination.
                  Where convenience meets culinary excellence. Experience
                  flavorful meals delivered to your door."
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      "Indulge in fresh, flavorful culinary delights today."
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      "Experience unparalleled support that exceeds
                      expectations. Our dedicated team ensures quality
                      assistance every time."
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      "Conveniently order from anywhere, anytime. Enjoy our
                      delicious meals delivered to your doorstep."
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container></Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  "Discover why our customers rave about our food. Experience
                  unparalleled satisfaction with every bite. Join the countless
                  voices praising our flavorful offerings."
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
