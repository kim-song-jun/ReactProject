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

function Detail(props) {
  let { id } = useParams();

  let shoe = props.shoes.find((x) => x.id == id);

  return (
    <Container>
      <Row>
        <ColorBtn bg='orange'>버튼</ColorBtn>
        <ColorBtn bg='blue'>버튼</ColorBtn>
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
