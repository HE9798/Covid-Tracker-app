import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Help The Earth Recover, <br /><span>It Starts With Us!</span></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, natus suscipit? Id dolorum eveniet repellat asperiores, nihil excepturi dolores voluptas amet recusandae harum quasi ex, possimus repudiandae maiores odio dignissimos.</p>
        </div>
    );
}
 
export default Banner;