import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"; // Importing components from Reactstrap
import logo from "../../assets/images/res-logo.png"; // Importing the logo image

import "../../styles/footer.css"; // Importing the CSS file for styling

import { Link } from "react-router-dom"; // Importing the Link component from React Router

const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      {/* Footer section */}
      <Container>
        {" "}
        {/* Container for footer content */}
        <Row>
          {" "}
          {/* Row to arrange footer content in a grid */}
          <Col lg="3" md="4" sm="6">
            {" "}
            {/* Column for logo and company info */}
            <div className=" footer__logo text-start">
              {" "}
              {/* Logo and company info */}
              <img src={logo} alt="logo" /> {/* Logo */}
              <h5>QuickBite Express</h5> {/* Company name */}
              <p>
                {" "}
                {/* Company description */}
                "QuickBite Express: Your go-to destination for delicious food
                delivered fast." "Experience the convenience of QuickBite
                Express, delivering mouthwatering meals straight to your
                doorstep."
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            {" "}
            {/* Column for delivery time */}
            <h5 className="footer__title">Delivery Time</h5>{" "}
            {/* Title for delivery time */}
            <ListGroup className="deliver__time-list">
              {" "}
              {/* List group for delivery time */}
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                {" "}
                {/* List item for delivery time */}
                <span>Sunday - Thursday</span> {/* Day */}
                <p>10:00am - 11:00pm</p> {/* Time */}
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                {" "}
                {/* List item for delivery time */}
                <span>Friday - Saturday</span> {/* Day */}
                <p>Off day</p> {/* Time */}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            {" "}
            {/* Column for contact information */}
            <h5 className="footer__title">Contact</h5>{" "}
            {/* Title for contact information */}
            <ListGroup className="deliver__time-list">
              {" "}
              {/* List group for contact information */}
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                {" "}
                {/* List item for location */}
                <p>
                  Location:Sector 2, HSR Layout, Bengaluru, Karnataka 560102{" "}
                  {/* Location */}
                </p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                {" "}
                {/* List item for phone */}
                <span>Phone: 6294382656</span> {/* Phone number */}
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                {" "}
                {/* List item for email */}
                <span>Email: quickbite@gmail.com</span> {/* Email address */}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            {" "}
            {/* Column for newsletter */}
            <h5 className="footer__title">Newsletter</h5>{" "}
            {/* Title for newsletter */}
            <p>Subscribe our newsletter</p> {/* Newsletter description */}
            <div className="newsletter">
              {" "}
              {/* Newsletter input and button */}
              <input type="email" placeholder="Enter your email" />{" "}
              {/* Email input */}
              <span>
                {" "}
                {/* Button */}
                <i class="ri-send-plane-line"></i> {/* Icon */}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          {" "}
          {/* Row for copyright and social links */}
          <Col lg="6" md="6">
            {" "}
            {/* Column for copyright */}
            <p className="copyright__text">
              {" "}
              {/* Copyright text */}
              Copyright - 2024, Website made by Anish Xalxo. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            {" "}
            {/* Column for social links */}
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              {" "}
              {/* Social links */}
              <p className="m-0">Follow: </p> {/* Follow text */}
              <span>
                {" "}
                {/* Facebook link */}{" "}
                <Link to="https://www.facebook.com/muhib160">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                {/* GitHub link */}
                <Link to="https://github.com/1905305">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                {" "}
                {/* YouTube link */}{" "}
                <Link to="">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                {/* LinkedIn link */}{" "}
                <Link to="https://www.linkedin.com/in/anish-xavier-xalxo/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
