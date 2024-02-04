import { useState } from "react";
import Button from "./components/Button/Button";
import Render from "./components/Render/Render";
import Container from './components/Container/Container'


const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();

  const startStoper = () =>{
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 10);
    },10))
  };

  const stopStoper = () =>{
    clearInterval(timer);
  }

  const resetStoper = () => {
    stopStoper();
    setTime(0);
  }

  return (
    <div>
      <Container>
        <Render time = {time}/>
        <Button action = {startStoper}> START</Button>
        <Button action = {stopStoper}> STOP</Button>
        <Button action = {resetStoper}> RESET</Button>
      </Container>
    </div>
  );
}

export default App;