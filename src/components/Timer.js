import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'

import styles from '../styles/components/Timer.module.css'

export default function Timer() {

    const { isActive, time, initiateTimer, resetTimer, hasFinished} = useContext(TimerContext);

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div className={styles.container}>
            <div className={styles.timerContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ? (
                 <button 
                     className={styles.timerButton}
                     onClick={resetTimer}
                 >Reiniciar Pomodoro</button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            className={styles.timerButton}
                            onClick={resetTimer}
                        >Parar Pomodoro</button>
                    ) : (
                        <button 
                            className={styles.timerButton}
                            onClick={initiateTimer}
                        >Iniciar Pomodoro</button>
                    )}
                </>
            )}
          
        </div>
    )
}