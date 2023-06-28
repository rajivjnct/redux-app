import React from "react";
import iphone from "../images/iphone.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../images/cart-plus-icon.png";

const Home = () => {
  return (
    <>
    <h1>Home Component</h1>
      <Container>
        <Row>
          <Col>
            <div className="cartimg-wrapper">
              <img src={Cart} />
            </div>
          </Col>
        </Row>
        <Row className="cart-wrapper">
          <Col className="image-wrapper item">
            <img src={iphone} />
          </Col>
          <Col>
            <p>iPhone</p>
            <p>Price - $1000</p>
          </Col>
          <Col>
            <button className="addtocart">Add to Cart</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
