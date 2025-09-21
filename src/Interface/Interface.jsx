import styles from './Interface.module.scss'
import { useStore } from '../stores/useStore'

const Interface = () => {
  const {ShowAscii,setShowAscii}=useStore()
  return (
    <div className={styles.Interface}>
      <h1 className={styles.title}>Ascii Renderer</h1>
      <button className={styles.AsciiBtn} onClick={() => setShowAscii(!ShowAscii)}>
        {ShowAscii ? "Disable ASCII" : "Enable ASCII"}
      </button>
    </div>
  )
}

export default Interface
