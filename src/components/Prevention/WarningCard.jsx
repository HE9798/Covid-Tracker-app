import React from 'react'
import styles from './WarningCard.module.css'

const WarningCard = ({ icon, title }) => {
    return ( 
        <div className={styles.container}>
            <img src={icon} alt="Icon" className={styles.icon} />
            <p className={styles.title}>{title}</p>
        </div>
     );
}
 
export default WarningCard;