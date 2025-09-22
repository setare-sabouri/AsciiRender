import styles from "./Interface.module.scss"

const FirstPage = () => {

  return (
    <div className={styles.FirstPage}>
      <h1 className={styles.title}>Ascii Render</h1>
      <p>
        ASCII <br /> transforms shapes into <span>characters</span> <br /> and
        pixels into <span>imagination</span>
      </p>
    </div>
  )
}

export default FirstPage
