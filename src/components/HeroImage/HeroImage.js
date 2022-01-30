import styles from './HeroImage.module.css';
import avatar from '../../assets/portrait_march_2020.jpg';

const HeroImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2 className={styles.title}>
          Hi, I am Ray
        </h2>
        <h3 className={styles.description}>
          Frontend Engineer (React/React Native)
        </h3>
        <h3 className={styles.intro}>
          I am a self taught developer. 
          <br/>
          With working experiences at a software house and a fast-growing stage startup.
        </h3>
      </div>

      <img className={styles.avatar} src={avatar} alt={"Avatar"}/>
    </div>
  )
}

export default HeroImage;