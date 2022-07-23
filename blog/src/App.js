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
  let blogTitle = 'ReactBLOG';

  return (
    // jsx 언어
    // .js안에서 쓰는  html 대용품
    // 원래는 React.createElement....이렇게 써야함
    <div className='App'>
      <div className='black-nav'>
        <h4 style={myStyle}>{blogTitle}</h4>
      </div>
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
              let copy = [...titles];
              copy[0] = '여자 코트 추천';
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
        <h4>{titles[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
