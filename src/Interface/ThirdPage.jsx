import styles from './Interface.module.scss'
import { FaGithub } from "react-icons/fa";

const ThirdPage = () => {
  return (
    <div className={styles.ThirdPage}>
      <p>
        "ASCII (American Standard Code for Information Interchange)<br />
        turns text into art.<br />
        From letters and symbols, entire images and designs emerge, proving that creativity has no bounds <br />
        — even in characters."
      </p>
      <a href="https://github.com/setare-sabouri/AsciiRender" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} className={styles.logo} />
      </a>
    </div>
  )
}

export default ThirdPage
