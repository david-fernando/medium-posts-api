import Image from 'next/image'
import Header from '@/components/Header'

import styles from '@/styles/components/Home.module.css'

function Home(){
    return (
        <div className="container">
            <Header />
            <div className={styles.banner}>
                <section>
                    <div>
                        <p>Unofficial Medium API that returns the <span>JSON</span> of your posts</p>
                        <p className={styles.description}>Perfect for developers, bloggers or content creators. Hassle-free access to your Medium articles, in any programming language.</p>
                        <span>
                            <input type="text" placeholder='Your Medium username' name="usermedium"/>
                            <button>Lets go</button>
                        </span>
                    </div>
                </section>
                <Image src='/banner-background.png' width={651} height={443} alt='Medium Posts API' />
            </div>
        </div>
    )
}

export default Home