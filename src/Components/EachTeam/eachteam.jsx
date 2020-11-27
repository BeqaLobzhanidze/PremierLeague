import styles from "./eachteam.module.css"

export default function eachteam({info}) {
  return (
        <div className={styles.container}>
          <div className={styles.rank}>{info.position}</div>
          <div><img className={styles.image} src={info.team.crestUrl} alt="asd"/></div>
          <div className={styles.team}>{info.team.name}</div>
          <div className={styles.matchedPlayed}>{info.playedGames}</div>
          <div className={styles.win}>{info.won}</div>
          <div className={styles.draw}>{info.draw}</div>
          <div className={styles.losses}>{info.lost}</div>
          <div className={styles.goals}>{info.goalsFor}:{info.goalsAgainst}</div>
          <div className={styles.points}>{info.points}</div>
          <div className={styles.form}>{info.form}</div>
          
        </div>
     
      
  )
}