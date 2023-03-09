import Box from './components/Box';
import { useState } from 'react';
import './App.css';

function App() {
  // 가위바위보 게임
  // 1. 박스 2개 (타이틀,사진,결과)
  // 2. 가위바위보 버튼
  // 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
  // 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
  // 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따짐
  // 6. 승패의 결과에 따라 테두리 색이 바뀐다(이기면 - 초록, 지면- 빨강, 비기면 - 검은색)

  return (
    <div>
      <div className='main'>
      <Box title="you" />
      <Box title="computer" />
      </div> 
      <div className='main'>
        <button type="">가위</button>
        <button type="">바위</button>
        <button type="">보</button>
      </div>

    </div>
    
    
    
  );
}

export default App;
