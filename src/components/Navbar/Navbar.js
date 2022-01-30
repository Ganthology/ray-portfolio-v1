import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a className={styles.logo}>Ray Gan</a>

      <ul className={styles.buttonContainer}>
        <li>
        <button className={`${styles.button} ${styles.fromLeft}`}>About</button>
        </li>
        <li>
        <button className={`${styles.button} ${styles.fromLeft}`}>Experience</button>
        </li>
        <li>
        <button className={`${styles.button} ${styles.fromLeft}`}>Portfolio</button>
        </li>
        <li>
        <button className={`${styles.button} ${styles.fromLeft}`}>Contact me</button>
        </li>
      </ul>
        <button className={styles.resumeButton}>My Resume</button>
    </div>
  )
}

export default Navbar;