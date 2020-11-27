import styles from "./header.module.css"
export default function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.rank}>#</div>
      <div className={styles.team}>team</div>
      <div className={styles.matchedPlayed}>MP</div>
      <div className={styles.win}>W</div>
      <div className={styles.draw}>D</div>
      <div className={styles.losses}>L</div>
      <div className={styles.goals}>G</div>
      <div className={styles.points}>Pts</div>
      <div className={styles.form}>Form</div>
    </div>
  )
}