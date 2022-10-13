import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by <img src="/logoicon.png" alt="Kaldi Company Logo" className={styles.logo} />
      </footer>
    </>
  )
}
