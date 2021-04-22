import { useEffect, useState, } from 'react'

import Header from './components/Header'
import Timer from './components/Timer'
import { TimerContext } from './contexts/TimerContext'

import './styles/global.css'

function App() {

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  function initiateTimer() {
    setIsActive(true)
  }

  let countdown;
  function resetTimer() {
    clearTimeout(countdown)
    setIsActive(false)
    setHasFinished(false)
    setTime(25 * 60)
  }

  function showNotification() {
    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Pomodoro completado! 🎉', {
        body: 'Descanse por 5 minutos e depois, inicie outro Pomodoro'
      })
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdown = setTimeout(() => { setTime(time - 1) }, 1000)
    } else if (isActive && time === 0) {
      showNotification()
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <TimerContext.Provider value={{ isActive, time, initiateTimer, resetTimer, hasFinished }}>
      <div className="container">
        <Header />
        <Timer />
      </div>
    </TimerContext.Provider>
  );
}

export default App;
