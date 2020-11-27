import styles from "./TeamsList.module.css"

export default function TeamsList({info , changeSelect}){
  if(!info) {
    return "Loading..."
  }

  return (
    <select className={styles.container} defaultValue="" onChange={(e) => {changeSelect(e.target.value)}}  >
      <option  disabled  value ="Select Team">Select Team</option>
      {
        info[0].table.map((item , index) => 
         {return <option key={index} value={item.team.name} >{item.team.name}</option>}
        ) 
      }
    </select>
  )
}