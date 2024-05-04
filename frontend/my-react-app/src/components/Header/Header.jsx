// Import necessary modules from React and other libraries
import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import actions from Redux slice
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// Import CSS styles
import "../../styles/header.css";

// Define navigation links
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Login/Register",
    path: "/LoginRegister",
  },
];

// Define the Header component
const Header = () => {
  // Create refs for DOM elements
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Access Redux state
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  // Function to toggle the menu
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // Function to toggle the cart
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  // useEffect hook to handle header shrink effect on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    // Cleanup function to remove the scroll event listener
    return () => window.removeEventListener("scroll");
  }, []);

  // Render the header component
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* Logo section */}
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Quickbite Express</h5>
          </div>

          {/* Navigation menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Nav right icons */}
          <div className="nav__right d-flex align-items-center gap-4">
            {/* Cart icon */}
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            {/* User icon */}
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            {/* Mobile menu icon */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

// Export the Header component
export default Header;
