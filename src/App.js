import React , {Component} from "react"
import styles from "./App.module.css"
import {EachTeam , TitleAnimation , TeamsList , Games , Header} from "./Components"
var fetched = undefined;
var schedule = undefined;
let uri = "http://api.football-data.org/v2/competitions/PL/standings";
let url = "https://api.football-data.org/v2/competitions/PL/matches";
let h = new Headers();
h.append('X-Auth-Token' , '088d44810ef34850a0d6fd66a9a706d2');
let req = new Request(uri , {
  method:"GET",
  headers:h,
  mode:'cors'
})
let matches = new Request(url , {
  method:"GET",
  headers:h,
  mode:'cors'
})
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      teams:[] ,
      eachTeam : ""
    }
  }
  async componentDidMount(){
    await fetch(req)
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      fetched = jsonData.standings;
    })
    this.setState({
      teams:fetched[0].table
    })
    await fetch(matches)
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      // fetched = jsonData.standings[0].table;
      schedule = jsonData.matches;
    })
  }
  handleClickHome = () => {
    this.setState({
      teams:fetched[1].table
    })
  }
  handleClickAway = () => {
    this.setState({
      teams:fetched[2].table
    })
  }
  handleClickOverall = () => {
    this.setState({
      teams:fetched[0].table
    })
  }
  changeSelect = (team) => {
    this.setState({
      eachTeam: team
    })
  }
  render(){
    const {teams}=this.state;
    return (
      <div className={styles.flex}>
        <div className={styles.header}>
        <TitleAnimation />
        </div>
        <div className={styles.button}>
          <div onClick = {this.handleClickOverall} className={styles.overall}>OverAll</div>
          <div onClick = {this.handleClickHome} className={styles.home}>Home</div>
          <div onClick= {this.handleClickAway} className={styles.away}>Away</div>
        </div>
        <div className={styles.container}>
        <Header />
        {
            teams.map((item, index)=> {
              return <EachTeam key={index}info={item}/>    
            })
        }
      </div>
      <TeamsList 
       info={fetched}
       changeSelect={this.changeSelect}
       />
       <Games SelectedTeam = {this.state.eachTeam} info = {schedule}/>
      </div>
    );
  }
}

export default App;
