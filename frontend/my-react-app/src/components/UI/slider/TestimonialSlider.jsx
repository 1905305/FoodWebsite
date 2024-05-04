import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Quickbite Express offers a delightful culinary journey, combining
          convenience with exceptional taste. With a diverse menu featuring
          home-style favorites and innovative creations, every bite is a savory
          delight. Friendly service and efficient delivery make dining a breeze,
          ensuring a memorable experience. Quickbite Express is a top choice for
          satisfying cravings and enjoying flavorful meals on the go."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Indulge in a culinary adventure where flavors shine and cravings are
          met with delight. From comforting classics to innovative dishes, every
          bite is a journey of taste. With efficient service and convenient
          delivery, dining becomes a joy wherever you are."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "At Quickbite Express, impeccable service and exceptional value for
          money go hand in hand. Experience prompt and friendly assistance
          alongside affordable prices that never compromise on quality. With
          every order, enjoy the satisfaction of receiving more than just a meal
          — it's an investment in culinary delight and customer satisfaction."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
