import React from 'react'
import styles from './Prevention.module.css'
import WarningCard from './WarningCard'

import WashHands from '../../images/wash-hands.png'
import Mask from '../../images/mask.png'
import HandShake from '../../images/handshake.png'
import SocialDistance from '../../images/social-dist.png'
import Vaccine from '../../images/vaccine.png'

const Prevention = () => {
    return ( 
        <>
            <h2 id='prevent' className={styles.title}>Prevention</h2>
            <hr />
            <div className={styles.container}>
                <WarningCard icon={Mask} title={'Always Wear a Mask'} />
                <WarningCard icon={SocialDistance} title={'Maintain Social Distance'} />
                <WarningCard icon={Vaccine} title={'Get Vaccinated if Possible'} />
                <WarningCard icon={WashHands} title={'Wash Your Hands Frequently'} />
                <WarningCard icon={HandShake} title={'Avoid Handshakes'} />
            </div>
        </>
    );
}
 
export default Prevention;