import { useState } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from '../styles/components/Header.module.css'

export default function Header() {

    const [isShowModal, setIsShowModal] = useState(false)

    const formatedDate = format(new Date(), 'd, MMM, y', {
        locale: ptBR
    })
    
    return (
        <>
            <header className={styles.header}>
                <h1>Pomodoro</h1>
                    <span>{formatedDate}</span>
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