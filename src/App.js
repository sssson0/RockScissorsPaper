import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV36wcKdebsqWuPhrxprRrzIwRcdECaQ6u6g&usqp=CAU"
  },
  scissors:{
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/359/359675.png"
  },
  paper:{
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByxl21CEOgZgxly6ILu-ZE39e6RrAGFSQGw&usqp=CAU"
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState("");
  const play = (userchoice)=>{
    setUserSelect(choice[userchoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userchoice],computerChoice));
  }

  const judgement=(user,computer)=>{
    console.log("uu",user,computer)

    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock") 
      return computer.name == "Scissors" ? "Win":"lose"
    else if(user.name == "Scissors") 
      return computer.name == "Paper" ? "Win":"lose"
    else if(user.name == "Paper") 
      return computer.name == "Rock" ? "Win":"lose"
  
  };

  const randomChoice =()=>{
    let itemArray = Object.keys(choice); //객체의키값만 뽑아서 배열로만들어주는 함수
    
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'> 
        <button onClick={()=>play("scissors")}>scissors</button>
        <button onClick={()=>play("rock")}>rock</button>
        <button onClick={()=>play("paper")}>paper</button>
      </div>   
    </div>
  );
}

export default App;
