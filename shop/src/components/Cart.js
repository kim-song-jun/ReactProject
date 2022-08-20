import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux/es/exports';
function Cart() {
  let a = useSelector((state) => {
    return state.userCart;
  });
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {a.map(function (e, i) {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.count}</td>
                <td>@mdo</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
