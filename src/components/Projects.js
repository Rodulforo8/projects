import React, { Component } from 'react'
import { Table } from 'react-bootstrap';



export default class Test extends Component {

    constructor(props) {
        super(props);
 
        this.state = {
      
        }

    
      }
 
    
    renderProjects(project) {
        return (
         
<th style={{...project.estatus ? { backgroundColor: "red", color:"white"  } : { backgroundColor: "green", color:"white"}
}}><span class="d-inline-block" tabindex="0" data-toggle="tooltip" title={project.subproyecto}>
  {project.estatus}
  </span></th> 
      
    
        )
      }
    
      renderDates(dates){
        return(
          <th style={{fontSize:"14px", padding: "10px"}}>
            {dates.dateString}
            </th>
        )
      }

    render() {
        return (
            <div>
            <Table striped bordered hover>
            <thead>
              <tr>
                {this.props.dates.map(this.renderDates)}
              </tr>
              <tr>
              {this.props.projects.map(this.renderProjects)}
              </tr>
            </thead>
          
          </Table>
       </div>
        )
    }
}


