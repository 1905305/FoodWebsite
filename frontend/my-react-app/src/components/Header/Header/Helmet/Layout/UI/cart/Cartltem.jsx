import React from "react";
import { ListGroupItem } from "reactstrap"; // Importing ListGroupItem component from Reactstrap

import "../../../styles/cart-item.css"; // Importing CSS styles for the cart item

import { useDispatch } from "react-redux"; // Importing useDispatch hook from Redux
import { cartActions } from "../../../store/shopping-cart/cartSlice"; // Importing cart actions from Redux slice

// CartItem functional component
const CartItem = ({ item }) => {
  // Destructuring properties from the item object
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions

  // Function to increment item quantity in the cart
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  // Function to decrease item quantity in the cart
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  // Function to delete item from the cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      {" "}
      {/* ListGroupItem component */}
      <div className="cart__item-info d-flex gap-2">
        {" "}
        {/* Container for cart item info */}
        <img src={image01} alt="product-img" /> {/* Product image */}
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          {" "}
          {/* Container for product info */}
          <div>
            {" "}
            {/* Container for product title, price, and quantity */}
            <h6 className="cart__product-title">{title}</h6>{" "}
            {/* Product title */}
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>{" "}
            {/* Product quantity and total price */}
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              {" "}
              {/* Container for increase and decrease buttons */}
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>{" "}
              {/* Increase button */}
              <span className="quantity">{quantity}</span> {/* Quantity */}
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>{" "}
              {/* Decrease button */}
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>{" "}
          {/* Delete button */}
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem; // Exporting the CartItem component
