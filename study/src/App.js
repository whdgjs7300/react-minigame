import Box from './components/Box';
import { useState } from 'react';
import './App.css';


const choice = {
  rock: {
    name: "Rock",
    img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;