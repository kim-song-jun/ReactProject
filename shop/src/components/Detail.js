import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Context1 } from './../App.js';
import { addUserCart } from '../store.js';
import { useDispatch } from 'react-redux/es/exports';

let ColorBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

// 컴포넌트에 갈고리 다는법 (옛날)
// class Detail2 extends React.Component{
//   componentDidMount() {
//     // mount 될때
//   }
//   componentDidUpdate() {
//     // update 될 때
//   }
//   componentWillUnmount() {
//     // unmout 될 때
//   }
// }

function Detail(props) {
  // state 사용은 useContext(Context)
  let { store, shoes } = useContext(Context1);
  let dispatch = useDispatch();

  // 컴포넌트에 갈고리 다는법 (요즘)
  // 여기 안에 적힌 코드는 mount, update시 실행됨
  useEffect(
    () => {
      // 실행 시점이 다름
      // html 렌더링 후에 작동함
      // 어려운 동작을 렌더링 한 후에 계산할 수 있음(ex 반복문 10000번)
      // 안에 적는 코드들:
      //  - 어려운 연산
      //  - 서버에서 데이터 가져오는 작업
      //  - 타이머 장착하는거
      let a = setTimeout(() => {
        setDiscount(false);
      }, 2000);
      let b = setTimeout(() => {
        setPageFade('detail-end');
      }, 100);
      console.log('useEffect');
      // useEffect 동작 전에 실행되는
      // return () => { }
      return () => {
        // 기존 코드 치우는 코드 자주 작성함
        // ex) 타이머 제거
        // ex) 서버로 데이터 요청
        // 기존 데이터 요청은 제거해주세요 ~ 이후 서버로 데이터 요청
        // mount시 실행 안되고 unmount시 실행됨
        console.log('clear function');
        clearTimeout(a);
        clearTimeout(b);
      };
    },
    // useEffect 실행조건 넣을 수 있는 곳... []
    // mount시, 안에 있는 state가 변할 때, 실행됨
    []
  );

  let [pageFade, setPageFade] = useState('');
  let [count, setCount] = useState(0);
  let [discount, setDiscount] = useState(true);
  let { id } = useParams();
  let shoe = props.shoes.find((x) => x.id == id);
  let [tab, setTab] = useState(0);

  return (
    <Container className={`detail-start ${pageFade}`}>
      {discount == true ? (
        <div className='alert alert-warning'>2초 이내 구매시 할인</div>
      ) : null}
      <Row>
        {/* <ColorBtn bg='orange'>버튼</ColorBtn>
        <ColorBtn bg='blue'>버튼</ColorBtn> */}
        <Col md={4}>
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              (shoe.id + 1) +
              '.jpg'
            }
            width='100%'
            alt={'코딩애플 이미지' + (shoe.id + 1)}
          />
        </Col>
        <Col md={4} mt={4}>
          <h4 className='pt-5'>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <Button
            variant='outline-danger'
            onClick={() => {
              dispatch(addUserCart(shoe));
            }}
          >
            주문하기
          </Button>
        </Col>
      </Row>
      <Nav variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link-0'
            onClick={() => {
              setTab(0);
            }}
          >
            Button0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-1'
            onClick={() => {
              setTab(1);
            }}
          >
            Button1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-2'
            onClick={() => {
              setTab(2);
            }}
          >
            Button2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} shoes={props.shoes}></TabContent>
    </Container>
  );
}

function TabContent({ tab, shoes }) {
  let { store } = useContext(Context1);
  let [fade, setFade] = useState('');

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('tab-end');
    }, 100);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [tab]);
  return (
    <div className={`tab-start ${fade}`}>
      {
        [
          <div>{shoes[0].title}</div>,
          <div>{shoes[1].title}</div>,
          <div>{shoes[2].title}</div>,
        ][tab]
      }
    </div>
  );
}

export default Detail;
