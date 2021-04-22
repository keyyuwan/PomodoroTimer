import { useState } from 'react'

import styles from '../styles/components/Header.module.css'

export default function Header() {

    const [isShowModal, setIsShowModal] = useState(false)

    return (
        <>
            <header className={styles.header}>
                <h1>Pomodoro</h1>
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