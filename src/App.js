import React, { useState } from 'react';

/**
 * react component 특징
 * 1. 파일명과 함수명을 일치시킨다.
 * 2. 하나의 컴포넌트 함수는 하나의 태그묶음만 리턴할 수 있다.
 * 3. 함수를 꼭  export 해야한다.
 * 4. 열고 닫지 않으면 무조건 /로 마무리 해야한다. jsx 형식
 * 
 * 추가적인 나열을 원한다면 Fragment를 사용 - 그냥 묶어주기위한 태그 
 * - 더욱 줄여서 <></>을 사용
 * 자동완성 세팅
 * ctrl shift p -셋팅용
 * settings user json
 * "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "html"
    }
 */
export default function App() {//default값을 가진 함수를 우선시함 //<h1></h1>으로 감싸면 react에서는 사용 가능하다
  let names = ["조성민", "조성이", "조성삼"];
  //state - 상태관리
  // 상태가 변하면 랜더링이 다시된다. - 두 상태를 비교해서 변화한 부분만 랜더링 된다. 
  // return에 jsx가 있기에 함수는 처음부터 다시 실행된다.
  //일반 변수의 변화가 아닌 useState가 변화했을 때만 다시 랜더링 된다. - state는 초기화 되지 않고 변화가 축적된다.
  const [nameArrayState, setNameArrayState] = useState(names);
  //useState 배열과 React.Dispatch<React.SetStateAction<string[]를 리턴 0,1번인덱스가 무조건 있음 -> [0][0]을 지정해야지 하나만 가져온다.
  // 비구조 할당으로 배열만 가져온 다음 값을 출력 
  //배열의 비구조 할당
  const [num1,num2,num3,num4] = [1,2,3,4];//각각 하나씩 대입

  //배열에서 하나씩 꺼내서 태그로 감싸서 리턴
  // const jsxNames = names.map(name => <h1>{name}</h1>);
  // setTimeout(() => {
  //   setNameArrayState([...nameArrayState,  "조성사"]);//setter을 통해서만 값을 넣을 수 있다.
  //   setTimeout(() => {
  //     setNameArrayState([...nameArrayState,  "조성오"]);//상위의 것만 무한반복 여기로 오지 않는다.
  //     setTimeout(() => {
  //     }, 2000);
  //   }, 2000);
  // }, 2000);
  //호출이 아닌 함수 정의를 대입
    console.log("콘솔 호출?");//버튼 클릭시 호출된다 == 함수가 처음부터 다시 호출된다.
    const handleclick = () => {
      setNameArrayState([...nameArrayState, "조성사"])
    }
  return <>
    <div>
      <button onClick={handleclick}>추가</button>
      {nameArrayState.map(name => <h1>{name}</h1>)}
    </div>
  </>;
}

// export default App;
