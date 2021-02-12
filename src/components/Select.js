import React from 'react'
import { Dropdown } from 'react-bootstrap';


const Select = ({onSelect}) => {


  const handleSelect=(e)=>{
    onSelect(e)
  }

    return (
        
<Dropdown  onSelect={handleSelect} >
  <Dropdown.Toggle   style={buttonStyle}  id="dropdown-basic">
    Proyectos
  </Dropdown.Toggle>

  <Dropdown.Menu >
    <Dropdown.Item  eventKey="all" >Todos los proyectos</Dropdown.Item>
    <Dropdown.Item  eventKey="A">Proyecto A</Dropdown.Item>
    <Dropdown.Item  eventKey="B" >Proyecto B</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    
    )
}

const buttonStyle = {
    backgroundColor:'rgb(82, 16, 7)',
     borderColor:'aliceblue',
     fontWeight: 'bold',
     fontSize: '20px',
     width:'200px',
     marginBottom:"1em"
}


export default Select
