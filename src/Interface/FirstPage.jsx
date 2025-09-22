import { useStore } from '../stores/useStore'
import styles from './Interface.module.scss'



const FirstPage = () => {
  const { ShowAscii, setShowAscii } = useStore()
  return (
    <div className={styles.FirstPage}>
      <h1 className={styles.title}>Ascii Render</h1>
      <p>ASCII  <br/> transforms shapes into <span>characters</span> <br/> and pixels into <span>imagination</span></p>
      <button role="button" className={`${styles.AsciiBtn} ${styles.Btn}`} onClick={() => setShowAscii(!ShowAscii)}>
        {ShowAscii ? "Disable ASCII" : "Enable ASCII"}
      </button>
    </div>
  )
}

export default FirstPage
