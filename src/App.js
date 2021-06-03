import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css';

function App() {

  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const ref = useRef(false);

  //componenetDidMount
  useEffect(() => {
    console.log('first render')

    //componenetWillUnmount
    return () => {
      console.log('unmount')
    }
  }, []);

  //componentDidUpdate
  useEffect(() => {
    // что бы код не выполнялся при пирвичном реендере
    if (!ref.current) {
      ref.current = true;
      return;
    }

    console.log('time changed')
  }, [time]);

  const startTimer = useCallback(() => {
    if (intervalId) {
      return
    }

    const id = setInterval(() => {
      setTime(time => time + 1);
    }, 1000)

    setIntervalId(id);
  }, [intervalId]);

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  const resetTimer = () => {
    setTime(0)
  }

  return (
    <div>
      <h1>Time {time}</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
