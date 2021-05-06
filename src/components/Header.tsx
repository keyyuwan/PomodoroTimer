import { useState } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { useTheme } from '../contexts/ThemeContext'

import styles from '../styles/components/Header.module.css'

export default function Header() {

    const { isLight, setToLight, setToDark } = useTheme()

    const [isShowModal, setIsShowModal] = useState(false)

    const formatedDate = format(new Date(), 'd, MMM, y', {
        locale: ptBR
    })
    
    return (
        <>
            <header className={styles.header}>
                <h1>Pomodoro</h1>
                    <span 
                        className={isLight ? `${styles.span} ${styles.light}` : styles.span}
                    >
                        {formatedDate}
                    </span>
                    { isLight ? (
                        <img 
                            className={styles.theme} 
                            src="/assets/icons/dark.svg" 
                            alt="Dark mode" 
                            onClick={setToDark}
                        />
                    ) : (
                        <img 
                            className={styles.theme} 
                            src="/assets/icons/light.svg" 
                            alt="Light mode" 
                            onClick={setToLight}
                        />
                    ) }
                <button onClick={() => { setIsShowModal(true) }}>Suporte</button>
            </header>
            { isShowModal && (
                <div className={styles.modalOverlay} onClick={() => { setIsShowModal(false) }}>
                    <div className={styles.modal}>
                        <a href="mailto:keyflcbyuwan@gmail.com" target="_blank">Email</a>
                        <a href="https://www.linkedin.com/in/key-yu-wan/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            )}
        </>
    )
}