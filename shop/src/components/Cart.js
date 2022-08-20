import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setUserName } from '../store.js';

function Cart() {
  let state = useSelector((state) => {
    return state.userCart;
  });

  let otherState = useSelector((state) => {
    return state.userName;
  });

  let dispatch = useDispatch();
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
          {state.map(function (e, i) {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.count}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(setUserName());
                    }}
                  >
                    {otherState}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
