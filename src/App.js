import Select from './components/Select'
import SelectDate from './components/SelectDate'
import ProjectName from './components/ProjectName'
import './App.css';
import Projects from './components/Projects'
import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment'

export default class App extends Component {
  constructor(props) {
    super(props);
    var data = 'hola'
    this.state = {
      projects: [],
      dates:[],
      filterDates:[],
      projectName: 'Todos los proyectos'
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleDateSelect = this.handleDateSelect.bind(this)
  }

componentDidMount() {
  this.getAllProjects()
  
  }


  getAllProjects(){
    axios.get('http://localhost:8000/api/allprojects')
    .then((response) => {
     const projects = response.data
   this.setState({projects})
   this.addStringDate()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getOneProject(name){
    axios.get('http://localhost:8000/api/projects?proyecto='+ name)
    .then((response) => {
     const projects = response.data
   this.setState({projects})
   this.addStringDate()
    })
    .catch((error) => {
      console.log(error);
    });
  }


  addStringDate(){
    let dates = []
    let projects= []
    for(var i in this.state.projects){
      var date = this.state.projects[i].timestamp
      var dateString = moment(date).format('MMMM Do YYYY')
      date = moment(date).format('L')
      date = moment(date).format('YYYY-MM-DD')
      
      var dateJson = {
        dateString:dateString,
        date:date,
        timestamp:this.state.projects[i].timestamp
      }

      var data = this.state.projects[i]
      data.dateString = dateString
      
      projects.push(data)
      dates.push(dateJson)
    }
    this.setState({projects})
    this.setState({dates})
    // this.filterDates()
  }

   handleSelect(projectName){

    if(projectName == 'all'){
      projectName = "Todos los proyectos"
      this.getAllProjects()
    }

    if(projectName == 'A'){
      projectName = "Proyecto A"
      this.getOneProject('A')
    }

    if(projectName == 'B'){
      projectName = "Proyecto B"
      this.getOneProject('B')
    }
     
    this.setState({
      projectName: projectName
    })
  }

  handleDateSelect(date){
    var name = ''
    if(this.state.projectName == 'Proyecto A') name = 'A'
    if(this.state.projectName == 'Proyecto B') name = 'B'

    if(this.state.projectName !== 'Todos los proyectos'){
    
      axios.get(`http://localhost:8000/api/projects-by-date?proyecto=${name}&date=${date}`)
      .then((response) => {
        console.log(response)
      const projects = response.data
     this.setState({projects})
     this.addStringDate()
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }


  render() {
    return (
    <div className="container">
      <div className="header"> 
      <Select onSelect={this.handleSelect} />
      <SelectDate onDateSelect={this.handleDateSelect} dates={this.state.dates} />
      <ProjectName   projectName={this.state.projectName}/>
      </div>
   
     <Projects dates={this.state.dates} projects={this.state.projects}/>
     </div>
    )
  }
}
