import styles from './Interface.module.scss'
import { useStore } from '../stores/useStore'
import { useState } from "react"

const SecondPage = () => {
    const { setInverted, Inverted, ShowAscii, setShowAscii } = useStore()


    const { setCharsValue } = useStore()
    const [localInput, setLocalInput] = useState("")
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setLocalInput(e.target.value)
        setError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (localInput.length !== 8) {
            setError("It HAS to be 8 characters")
            return
        }
        const finalValue = " " + localInput // always starts with a space for ASCII render
        setCharsValue(finalValue)
        setLocalInput('')
    }

    return (
        <div className={styles.SecondPage} >

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="characters"
                    value={localInput}
                    onChange={handleChange}
                    placeholder="Any character you like"
                    className={`${styles.Btn}`}
                />
                <input
                    type="submit"
                    value="Generate"
                    className={`${styles.Btn}`}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>


            <button role="button" className={`${styles.AsciiBtn} ${styles.Btn}`} onClick={() => setShowAscii(!ShowAscii)}>
                {ShowAscii ? "Disable ASCII" : "Enable ASCII"}
            </button>
            <button role="button" className={`${styles.InvertBtn} ${styles.Btn}`} onClick={() => setInverted(!Inverted)}>
                {Inverted ? "Inverted" : "Not Inverted"}
            </button>

        </div>
    )
}

export default SecondPage
