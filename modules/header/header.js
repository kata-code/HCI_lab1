import styles from './header.module.css';
import Image from 'next/image';


import LogoImg from "../../assets/logo1.png";

const Header = () => {
    return (
        <header className={styles.main}>
            <main className={styles.content}>
                <Image src={LogoImg} width={50} height={50} alt="Company logo"/>
                <nav>
                
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Showcase</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Sign in</li>
                    
                </nav>
            </main>
        </header>
    )
}


export default Header;