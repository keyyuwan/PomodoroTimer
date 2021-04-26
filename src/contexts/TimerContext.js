import { createContext, useState, useEffect } from 'react'

export const TimerContext = createContext()

export function TimerContextProvider({ children }) {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [showTime, setShowTime] = useState(false)

  function initiateTimer() {
    setIsActive(true)
    setShowTime(true)
  }

  let countdown;
  function resetTimer() {
    clearTimeout(countdown)
    setIsActive(false)
    setHasFinished(false)
    setTime(25 * 60)
    setShowTime(false)
  }

  function showNotification() {
    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Pomodoro completado! 🎉', {
        body: 'Uhul!'
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
      <TimerContext.Provider 
      value={{isActive, 
            time, 
            initiateTimer, 
            resetTimer, 
            hasFinished, 
            showTime}}>
          {children}
      </TimerContext.Provider>
  )
}