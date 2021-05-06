import { createContext, useState, useEffect, ReactNode } from 'react'

interface TimerContextData {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
  showTime: boolean;
  initiateTimer: () => void;
  resetTimer: () => void;
}

interface TimerContextProviderProps {
  children: ReactNode;
}

export const TimerContext = createContext({} as TimerContextData)

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [showTime, setShowTime] = useState(false)

  function initiateTimer() {
    setIsActive(true)
    setShowTime(true)
  }

  let countdown: NodeJS.Timeout;
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