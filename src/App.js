import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const [restart, setRestart] = useState();
  const [stop, setStop] = useState();

  const Restartbtn = () => {
    setMinute(0);
    setSecond(0);
  }

  const Stopbtn = () =>{
    clearInterval(timer)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="timer">
          <div className="minutes">{minute<10?"0"+minute:minute}</div>
          <div className="semicolon">:</div>
          <div className="seconds">{second<10?"0"+second:second}</div>
        </div>

        <div className="btns">
          <div className="reset-btn btn" onClick={Restartbtn}>Restart</div>
          <div className="stop-btn btn" onClick={Stopbtn}>Stop</div>
        </div>
      </div>
    </div>
  );
}

export default App;
