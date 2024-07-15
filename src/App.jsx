
import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row,Col,Card} from 'react-bootstrap'

function App() {
  const [students,setStudents]=useState([])
  const [desc,setName]=useState('')
  const [editIndex,setEditIndex]=useState(null)
  
const handleSubmit=(event)=>{
event.preventDefault()
if(editIndex!==null){
  const newStudents=[...students]
  newStudents[editIndex]={desc}
  setStudents(newStudents)
  setEditIndex(null)
}else{
  setStudents([...students,{desc}])
}
  setName('')
}
const handleDelete=(index)=>{
  const newStudents=[...students]
  newStudents.splice(index,1)
  setStudents(newStudents)
}

const handleEdit=(index)=>{
  setName(students[index].desc)
  setEditIndex(index)

}


  return (
    <Container>

      <div class="fs-1">Recordatorio</div>

    <Row>

  
    <Form onSubmit={handleSubmit}>
     
        <Form.Group className="mb-3">
          <Form.Label >Ingrese fecha</Form.Label>
          <input type='date' class="form-control"></input>
          <Form.Label >Descripción</Form.Label>
          <Form.Control  placeholder="Ingrese Descripción" value={desc} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
          <label class="form-check-label" for="flexSwitchCheckDefault">Importante</label>
        </div>

        <Button type="submit">
          {
          editIndex!==null?'Editar Estudiante':'Agregar Estudiante'
          }
          </Button>
    
    </Form>
    </Row>

      <Row>
        {
          students.map((student,index)=>(
           <Col>
           <Card style={{ width: '18rem' }}>
              
            <Card.Body>
              <Card.Title>Datos Estudiante</Card.Title>
               <Card.Text>Nombre:{student.desc} </Card.Text>
              <Button variant="danger" onClick={()=>handleDelete(index)}>Eliminar</Button>
              <Button variant="warning" onClick={()=>handleEdit(index)}>Modificar</Button>
            </Card.Body>
          </Card>
           </Col>

          ))
        }
      
      </Row>
    </Container>
  )
}

export default App
