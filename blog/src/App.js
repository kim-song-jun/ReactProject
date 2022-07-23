import { useState } from 'react';
import './App.css';

function App() {
  let myStyle = {
    color: 'wheat',
    fontSize: '20px',
  };

  // state 만드는 법
  // js의 Destructing 문법
  // let num = [1,2] => 각각을 변수로 빼고싶다
  // 1. let a = num[0] => 1
  // 2. let b = num[1] => 2
  // 조금더 편하게 쓸 수 있는 문법
  // 3. let [a,b] = [1,2] => a == 1, b == 2
  // array 안에 있는 변수들을 각각 변수로 뽑아주는 문법
  // useState 는 [변수, 함수] 가 남음
  // 언제사용?? 변수가 굳이 있는데?
  // 변수와 state의 차이
  // 1. 일반변수는 갑자기 변경되면 자동으로 반영되지 않음
  // 2. state는 변수가 변경되면 자동으로 반영됨
  // (vue의 data바인딩은 이게 자동으로 되는데..)
  // 3. state가 변경되면 자동으로 HTML이 재 랜더링 됨
  let [titles, setTitles] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let blogTitle = 'ReactBLOG';

  return (
    // jsx 언어
    // .js안에서 쓰는  html 대용품
    // 원래는 React.createElement....이렇게 써야함
    <div className='App'>
      <div className='black-nav'>
        <h4 style={myStyle}>{blogTitle}</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...titles];
          copy.sort();
          setTitles(copy);
        }}
      >
        가나다순 정렬
      </button>
      <div className='list'>
        <h4>
          {titles[0]}{' '}
          <span
            onClick={() => {
              let copy = [...likes];
              copy[0] = copy[0] + 1;
              setLikes(copy);
            }}
          >
            👍
          </span>{' '}
          {likes[0]}{' '}
          <button
            onClick={() => {
              // ...문법: array의 [], object의 {}를 벗김
              let copy = [...titles];
              copy[0] = '여자 코트 추천';
              // state 변경 함수 특징
              // 1. 기존 state === 신규 state일 경우 변경 x
              // 2. array/object 특징(레퍼런스)
              setTitles(copy);
            }}
          >
            변경
          </button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{titles[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {titles[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {/* react에서 if문을 쓸려면 중괄호 안에 넣어놔야함 삼항연산자 써야함 */}
      {modal ? <Modal></Modal> : null}
    </div>
  );
}

// component 만들기
// 참고 1: return()안에 html 병렬 기입하려면??
// -> <></>  == 의미없는 div 대신 사용
// 참고 2: <함수명></함수명> == <함수명/>
// 문법 1
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
// 문법 2
// const Modal = () => {
//  return(
//    <div></div>
//  )
// }

export default App;
