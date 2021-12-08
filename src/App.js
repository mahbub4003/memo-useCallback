import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import Title from "./component/Title";
import ShowCount from "./component/ShowCount";
import Button from "./component/Button";

function App() {
  const [count, setcont] = useState(0);
  const [count2, setcont2] = useState(0);

  const incrimentByFive = useCallback(() => {
    setcont2((pre) => pre + 5);
  }, []);

  const incrimentByTow = useCallback(() => {
    setcont((pre) => pre + 2);
  }, []);

  return (
    <div className="App">
      <Title />
      <ShowCount count={count} title="Counter 1" />
      <Button handleClick={incrimentByTow}> By Tow</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrimentByFive}> By Five</Button>
    </div>
  );
}

export default App;
