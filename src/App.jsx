
import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row,Col,Card} from 'react-bootstrap'

function App() {
  const [reminder,setReminder]=useState([])
  const [desc,setDesc]=useState('')
  const [editIndex,setEditIndex]=useState(null)
  
const handleSubmit=(event)=>{
event.preventDefault()
if(editIndex!==null){
  const newReminder=[...reminder]
  newReminder[editIndex]={desc}
  setReminder(newReminder)
  setEditIndex(null)
}else{
  setReminder([...reminder,{desc}])
}
  setDesc('')
}
const handleDelete=(index)=>{
  const newReminder=[...reminder]
  newReminder.splice(index,1)
  setReminder(newReminder)
}

const handleEdit=(index)=>{
  setDesc(reminder[index].desc)
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
          <Form.Control  placeholder="Ingrese Descripción" value={desc} onChange={(e)=>setReminder(e.target.value)} />
        </Form.Group>
        
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
          <label class="form-check-label" for="flexSwitchCheckDefault">Importante</label>
        </div>

        <Button type="submit">
          {
          editIndex!==null?'Editar Recordatorio':'Agregar Recordatorio'
          }
          </Button>
    
    </Form>
    </Row>

      <Row>
        {
          reminder.map((reminder,index)=>(
           <Col>
           <Card style={{ width: '18rem' }}>
              
            <Card.Body>
              <Card.Title>Datos Recordatorio</Card.Title>
               <Card.Text>Descripción:{reminder.desc} </Card.Text>
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
