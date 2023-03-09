import Box from './components/Box';
import { useState } from 'react';
import './App.css';

const choice = {
  rock : {
    name : "Rock",
    img : "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-300x300.jpg",
  },
  scissors: {
    name : "Scissors",
    img : "https://masflex.com.ph/wp-content/uploads/2020/09/HI-426.png",
  },
  paper : {
    name : "Paper",
    img : "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
}

function App() {
  // 가위바위보 게임
  // 1. 박스 2개 (타이틀,사진,결과)
  // 2. 가위바위보 버튼
  // 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
  // 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
  // 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따짐
  // 6. 승패의 결과에 따라 테두리 색이 바뀐다(이기면 - 초록, 지면- 빨강, 비기면 - 검은색)

  // 인자값으로 버튼을 구분시킴 
  // 리액트에서 플레이 함수를 () 쓰면 즉시 실행시키기 때문애 콜백함수로 넣어줘야함
  // UI 화면이 보여지자 마자 버튼을 클릭하지 않았는데도 실행되는 것을 방지

  const [userSelect, setUserSelect]= useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])

  }


  return (
    <div>
      <div className='main'>
      <Box title="you" item={userSelect} />
      <Box title="computer" />
      </div> 
      <div className='main'>
        <button onClick={()=>play("scissors")} type="">가위</button>
        <button onClick={()=>play("rock") } type="">바위</button>
        <button onClick={()=>play("paper")} type="">보</button>
      </div>

    </div>
    
    
    
  );
}

export default App;
