import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import data from './data.js';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/Detail.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Cart from './components/Cart.js';

// context 생성
// context는 state 보관함 역할
export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  // 훅 : 유용한 것들 ,, 페이지 이동을 도와줌
  let navigate = useNavigate();
  let [index, setIndex] = useState(2);
  let [loding, setLoding] = useState(false);
  let [store, setStore] = useState([10, 11, 12]);

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
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
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
                {loding ? <div>로딩중...</div> : null}
                <Button
                  variant='outline-danger'
                  onClick={() => {
                    if (index > 3) {
                      console.log('out of index');
                      return;
                    }
                    let copyLoding = loding;
                    setLoding(!copyLoding);
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${index}.json`
                      )
                      .then((e) => {
                        console.log('data loding sucessed');
                        // let copy = [...shoes];
                        // let newData = copy.concat(e.data);
                        // setShoes(newData);
                        let copy = [...shoes, ...e.data];
                        setShoes(copy);
                        let copyIndex = index;
                        copyIndex++;
                        console.log(copyIndex);
                        setIndex(copyIndex);
                        let copyLoding = loding;
                        setLoding(!copyLoding);
                      })
                      .catch((e) => {
                        console.log('data loading failed');
                        console.log('error > ' + e);
                        let copyLoding = loding;
                        setLoding(!copyLoding);
                      });
                  }}
                >
                  버튼
                </Button>
              </Container>
            </>
          }
        />

        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{ store, shoes }}>
              <Detail shoes={shoes}></Detail>
            </Context1.Provider>
          }
        />
        <Route path='/cart' element={<Cart></Cart>}></Route>
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
