import { useStore } from '../stores/useStore'
import styles from './Interface.module.scss'

const SecondPage = () => {
      const { setInverted,Inverted } = useStore()
    
    return (
        <div className={styles.SecondPage} >
            <button role="button" className={`${styles.InvertBtn} ${styles.Btn}`} onClick={() => setInverted(!Inverted)}>
                {Inverted ? "Inverted" : "Not Inverted"}
            </button>
        </div>
    )
}

export default SecondPage
