import React from 'react'
import styles from './About.module.css'

const About = () => {
    return ( 
        <div id='about' className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <hr />
            <p>Covid Tracker is a website developed with React that shows live data of covid cases, cured and unfortunately deceased which is pulled from an API which is updated daily. It also shows methods to avoid getting infected whith the disease. Covid-19 is a contagious disease caused by severe acute respiratory syndrome coronavirus 2. The first known case was identified in Wuhan, China, in December 2019.The disease has since spread worldwide, leading to an ongoing pandemic. Symptoms of COVID-19 are variable, but often include fever, cough, headache, fatigue, breathing difficulties, and loss of smell and taste. Symptoms may begin one to fourteen days after exposure to the virus.</p>
            <h2 className={styles.safe}>Stay Safe</h2>
        </div>
    );
}
 
export default About;