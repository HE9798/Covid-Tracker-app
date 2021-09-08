import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './Navbar.module.css'

const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return ( 
        <div className={styles.container}>
            <h1 onClick={scrollToTop}><span>Covid-19</span> Tracker</h1>
            <ul>    
                <li onClick={scrollToTop}>Home</li>
                <li><Link to='news' spy={true} smooth={true} offset={-70} duration={500}>News</Link></li>
                <li><Link to='prevent' spy={true} smooth={true} offset={-70} duration={500}>Prevention</Link></li>
                <li><Link to='about' spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            </ul>
        </div>
    );
}
 
export default Navbar;