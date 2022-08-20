import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setUserName, increaseAge, setCount } from '../store.js';

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
      <h6>
        {otherState.name} {otherState.age}의 장바구니
      </h6>
      <Button
        onClick={() => {
          dispatch(increaseAge(2));
        }}
      >
        버튼
      </Button>
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
                      dispatch(setCount(e.id));
                      console.log(e.id);
                    }}
                  >
                    +
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
