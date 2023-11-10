//images
import image from "../assets/photo.jpg"

//styles
import styles from "../styles/Card.module.css"

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image}  alt="my self"/>
            </div>

            <div className={styles.text}>
            <h1>Saman</h1>
            <p>
                Hi , My name is Saman Tarat or in short , Sam . I'm a front web developer in React.js library and i'm still learning other developing
                languages , I'll be happy to help you and make some real good progress .
            </p>
            </div>

            <div className={styles.communications}>
                <button>GitHub</button>
                <button>Twitter</button>
                <button>LinkedIn</button>
            </div>

            <div className={styles.button}>
                <h1>Hire ME</h1>
            </div>

            <footer>
                <div>
                    <p>♥ | 2.5k Views</p>
                </div>
                <div>
                    <p>Projects number | 100</p>
                </div>
            </footer>
        </div>
    );
};

export default Card;