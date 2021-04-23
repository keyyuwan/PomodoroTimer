import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'

import styles from '../styles/components/Timer.module.css'

export default function Timer() {

    const { isActive, time, initiateTimer, resetTimer, hasFinished, showTime } = useContext(TimerContext);

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const currentTime = new Date().toLocaleTimeString()
    const splittedTime = currentTime.split(':')

    const currentMinutes = splittedTime[1].padStart(2, '0')
    const currentHours = splittedTime[0].padStart(2, '0')

    const currentMinutesNumber = Number(splittedTime[1])
    const endingMinutes = currentMinutesNumber + 25
    const currentHoursNumber = Number(splittedTime[0])

    const getUpdatedHours = () => {
        let updatedHours = endingMinutes >= 60 ? (currentHoursNumber + 1) : currentHoursNumber

        return String(updatedHours).padStart(2, '0')
    }
    const getUpdatedMinutes = () => {
        let updatedMinutes = endingMinutes >= 60 ? (endingMinutes - 60) : endingMinutes

        return String(updatedMinutes).padStart(2, '0')
    }

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
                { hasFinished ? (
                    <p className={styles.congratsMessage}>🎉 Parabéns! Você terminou um ciclo, <br /> agora faça uma pausa de 5 minutos.</p>
                ) : (
                    <>
                        { showTime && (
                            <div className={styles.time}>
                                <p>{`Você começou às: ${currentHours}:${currentMinutes}`}</p>
                                <p>{`E vai terminar às: ${getUpdatedHours()}:${getUpdatedMinutes()}`}</p>
                            </div>
                        ) }
                    </>
                ) }

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