리액트란 ?

자바스크립트의 불편한 점
1.  document.getbyElementById("")
코드가 에러가 날 확률도 높고 매번 태그 가져오기도 불편함

2. 자바스크립트와 HTML파일이 따로놈(관리가 힘듬)-웹사이트가 커질수록 관리가 힘들어짐

3. 새 페이지 들어갈때마다 새로고침이 됨
모바일로 사용하기 매우 불편함

리액트는 
1. JSX를 사용해 관련있는 HTML과 JS를 합쳐줌 (컴포넌트 화)
2.  페이지(메뉴) 들어갈때 새로고침이 되지 않음
3. 코드의 재활용이 높아짐


리액트의 환경설정
1. nodejs 설치(자바스크립트를 브라우저 밖에서도 동작할 수 있게 하는 런타임 환경!)
2. npm (노드 패키지 매니저) - 유명한 라이브러리 설치

SPA - 페이지는 index.html 하나지만 파일 내에 있는 내용만 바꿔줌 (눈속임)
페이지가 여러개인 것처럼 보이지만 하나임(자바스크립트가 안에 출력되는 내용만 바꿔줌)

index.js
리액트의 기본 세팅
HTML과 JS를 연결해주는 브릿지(index.html 파일과 App.js를 연결)

props 예제(최상위 컴포넌트 내에서 Import 받은 하위 컴포넌트로 상태값 전달)
      <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} />

리액트가 리액트인 이유 ?
1. 리액트 내 에서는 string값을 제외하고 {}를 씀
2. 리액트는 state에만 반응함(일반 js문법으로는 반응하지 않음)
ex) let counter = 0;
    const increase = () => {
    return counter + 1;
  }
3. 값이 변하면 UI가 업데이트 되게 함
하지만 변수가 많아질 경우를 대비해 State가 나옴 
state가 변하면 UI를 바뀌게 함(재렌더링)
set 함수는 비동기적으로 작동함 (바뀌는데 걸리는시간)
일반 변수는 재랜더링 될때마다 전부 초기값으로 바뀜

클래스형 컴포넌트 (옛 방식이지만 중요한 것)
/** 클래스형 컴포넌트를 사용하기 위해 index.js 파일 내에 <AppClass/>를 사용 */

lifecycle 
1. Mounting : 컴포넌트가 시작될 때
2. Updating: state가 업데이트 되고 UI가 업데이트 될 때
3. UnMounting : 컴포넌트가 종료될 때

함수형 컴포넌트 내에서 useEffect() 
1. 두번 째 인자값 배열이 빈값이면 componentDidMount() 
2. 배열안에 state 값이 있으면 componentDidUpdate()
gg