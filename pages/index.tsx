import Header from '@/components/Header'

import styles from '@/styles/components/Home.module.css'

function Home(){
    return (
        <div className="container">
            <Header />
            <div className={styles.banner}></div>
        </div>
    )
}

export default Home