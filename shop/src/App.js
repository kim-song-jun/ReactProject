import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="bright" variant="bright">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map(function (e, i) {
                    return <Card shoes={e}></Card>;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<div>detail page</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <Col md={4}>
        <img
          alt="코딩애플 이미지"
          src={
            "https://codingapple1.github.io/shop/shoes" +
            (props.shoes.id + 1) +
            ".jpg"
          }
          width="80%"
        />
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content}
          <br />
          {props.shoes.price}
        </p>
      </Col>
    </>
  );
}

export default App;
