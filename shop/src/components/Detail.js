import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  // 컴포넌트에 갈고리 다는법 (요즘)
  // 여기 안에 적힌 코드는 mount, update시 실행됨
  useEffect(() => {
    // 실행 시점이 다름
    // html 렌더링 후에 작동함
    // 어려운 동작을 렌더링 한 후에 계산할 수 있음(ex 반복문 10000번)
    // 안에 적는 코드들:
    //  - 어려운 연산
    //  - 서버에서 데이터 가져오는 작업
    //  - 타이머 장착하는거
    setTimeout(() => {
      setDiscount(false);
    }, 2000);
    console.log('hello');
  });
  let [discount, setDiscount] = useState(true);
  let { id } = useParams();
  let shoe = props.shoes.find((x) => x.id == id);
  return (
    <Container>
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
          <Button variant='outline-danger'>주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
