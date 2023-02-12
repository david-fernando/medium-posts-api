import Image from 'next/image'

import styles from '@/styles/components/Header.module.css'

type Props = {
    linkActive?: string
}

function Header({linkActive = 'home'}: Props){

    const Links = () => (
        <>
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
        </>
    )

    return (
        <header className={styles.header}>
        <span>
            <Image width={64} height={39.8} src="/icon.svg" alt="Medium Posts API" />
            <p>Medium Posts API</p>
        </span>
        <nav>
            <Links />
        </nav>
        <button className={styles.menuButton}>
            <Image src='menu-icon.svg' width={16} height={17} alt="Menu Button" />
        </button>
    </header>
    )
}

export default Header