import styles from './Interface.module.scss'
import { useStore } from '../stores/useStore'

const Interface = () => {
  const { ShowAscii, setShowAscii,setInverted,Inverted } = useStore()
  return (
    <div className={styles.Interface}>
      <h1 className={styles.title}>Ascii Renderer</h1>
      <button className={styles.AsciiBtn} onClick={() => setShowAscii(!ShowAscii)}>
        {ShowAscii ? "Disable ASCII" : "Enable ASCII"}
      </button>

      <button className={styles.AsciiBtn} onClick={() => setInverted(!Inverted)}>
        {Inverted ? "Inverted" : "Not Inverted"}
      </button>
    </div>
  )
}

export default Interface
