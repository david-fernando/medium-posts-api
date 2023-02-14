import Image from 'next/image'

import styles from '@/styles/components/Header.module.css'

type Props = {
    linkActive?: string
}

function Header({linkActive = 'home'}: Props){

    const links = {
        'home': (linkActive === 'home')? styles.active : styles.inactive,
        'documentation': (linkActive === 'documentation')? styles.active : styles.inactive,
        'github': (linkActive === 'github')? styles.active : styles.inactive,
    }

    const Links = () => (
        <>
            <a href="./"
             className={links.home}>
                Home
            </a>
            <a href="#"
             className={links.documentation}>
                Documentation
            </a>
            <a
             href="https://github.com/david-fernando/medium-posts-api"
             rel="noreferrer" 
             target="_blank"
             className={links.github}>
                GitHub
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