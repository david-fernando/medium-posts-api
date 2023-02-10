import Image from 'next/image'

import styles from '@/styles/components/Header.module.css'

type Props = {
    linkActive?: string
}

function Header({linkActive = 'home'}: Props){
    return (
        <header className={styles.header}>
        <span>
            <Image width={64} height={39.8} src="/icon.svg" alt="Medium Posts API" />
            <p>Medium Posts API</p>
        </span>
        <nav>
            <a href="./"
             className={(linkActive === 'home')? styles.active : styles.inactive}>
                Home
            </a>
            <a href="#"
             className={(linkActive === 'documentation')? styles.active : styles.inactive}>
                Documentation
            </a>
            <a
             href="https://github.com/david-fernando/medium-posts-api"
             rel="noreferrer" 
             target="_blank"
             className={(linkActive === 'github')? styles.active : styles.inactive}>
                Github
            </a>
        </nav>
    </header>
    )
}

export default Header