import { ReactNode } from 'react'
import { useTheme } from '../contexts/ThemeContext'

import styles from '../styles/components/Background.module.css'

interface BackgroundProps {
    children: ReactNode;
}

export default function Bakcground({ children }: BackgroundProps) {

    const { isLight } = useTheme()

    return (
        <div className={isLight ? `${styles.background} ${styles.light}` : styles.background}>
            {children}
        </div>
    )
}