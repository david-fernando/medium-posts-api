import Image from 'next/image'

import styles from '@/styles/components/Header.module.css'

function Header(){
    return (
        <header className={styles.header}>
        <span>
            <Image width={64} height={39.8} src="/icon.svg" alt="Medium Posts API" />
            <p>Medium Posts API</p>
        </span>
        <nav>
            <a href="./" className={styles.active}>Home</a>
            <a href="#" className={styles.inactive}>Documentation</a>
            <a
             href="https://github.com/david-fernando/medium-posts-api"
             rel="noreferrer" 
             target="_blank"
             className={styles.inactive}>Github</a>
        </nav>
    </header>
    )
}

export default Header