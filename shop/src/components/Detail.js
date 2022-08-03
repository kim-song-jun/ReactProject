import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Detail(props) {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.shoes.id + 1) +
              ".jpg"
            }
            width="100%"
            alt={"코딩애플 이미지" + (props.shoes.id + 1)}
          />
        </Col>
        <Col md={4}>
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <Button variant="outline-danger">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
