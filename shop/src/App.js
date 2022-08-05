import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/Detail.js';

function App() {
  let [shoes, setShoes] = useState(data);
  // 훅 : 유용한 것들 ,, 페이지 이동을 도와줌
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail/0');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
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

        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
        <Route path='/event' element={<Event></Event>}>
          <Route
            path='one'
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path='*' element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}
function About() {
  return (
    <>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </>
  );
}
function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

function Card(props) {
  return (
    <>
      <Col md={4}>
        <img
          alt='코딩애플 이미지'
          src={
            'https://codingapple1.github.io/shop/shoes' +
            (props.shoes.id + 1) +
            '.jpg'
          }
          width='80%'
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
