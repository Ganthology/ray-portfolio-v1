import styles from './SocialMediaIcons.module.css';
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';
import instagramLogo from '../../assets/instagram.png';

const SocialMediaIcons = () => {
  return (
      <div className={styles.iconsContainer}>
      <img className={styles.icon} src={linkedinLogo} alt={"Linkedin"}/>
      <img className={styles.icon} src={githubLogo} alt={"Github"}/>
      <img className={styles.icon} src={instagramLogo} alt={"Instagram"}/>
    </div>
  )
}

export default SocialMediaIcons;