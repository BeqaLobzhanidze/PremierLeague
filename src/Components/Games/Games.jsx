import styles from "./Games.module.css"

export default function Games({SelectedTeam , info}){
  if(!info){
    return ""
  }
  return (
    <div className={styles.container}>
      {
        info.map((item , index )=> {
          if(SelectedTeam===item.awayTeam.name || SelectedTeam===item.homeTeam.name) {
          if(item.status === "FINISHED"){
            return <div key={index} className={styles.team}>{item.homeTeam.name} <span className={styles.score}>{item.score.fullTime.homeTeam} : {item.score.fullTime.awayTeam}</span>  {item.awayTeam.name}</div>
          }else if(item.status === "POSTPONED") {
            return <div key={index}className={styles.team}>{item.homeTeam.name} <span className={styles.score}>XXX</span>  {item.awayTeam.name}</div>
          }
          return <div key={index}className={styles.team}>{item.homeTeam.name} : {item.awayTeam.name}</div>
          }
        })
      }
    </div>
  )
}