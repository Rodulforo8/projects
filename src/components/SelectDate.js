import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';

export default class SelectDate extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
      
        }
      }

    renderDates(dates) {
 
        return (
          <tr >
        <Dropdown.Item  eventKey={dates.date} >{dates.dateString}</Dropdown.Item>
          </tr>
        )
      }

    render() {
        return (
            <Dropdown  onSelect={this.props.onDateSelect} >
            <Dropdown.Toggle   style={buttonStyle}  id="dropdown-basic">
              Fecha
            </Dropdown.Toggle>
          
            <Dropdown.Menu >
            {this.props.dates.map(this.renderDates)}
    
            </Dropdown.Menu>
          </Dropdown>
        )
    }
}

const buttonStyle = {
    backgroundColor:'rgb(82, 16, 7)',
     borderColor:'aliceblue',
     fontWeight: 'bold',
     fontSize: '20px',
     width:'200px',
     marginBottom:"1em"
}
