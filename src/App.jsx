
import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row,Col,Card} from 'react-bootstrap'

function App() {
  const [reminder,setReminder]=useState([])
  const [date,setDate]=useState('')
  const [desc,setDesc]=useState('')
  const [editIndex,setEditIndex]=useState(null)
  
const handleSubmit=(event)=>{
event.preventDefault()
if(editIndex!==null){
  const newReminder=[...reminder]
  newReminder[editIndex]={date,desc}
  setReminder(newReminder)
  setEditIndex(null)
}else{
  setReminder([...reminder,{date,desc}])
}
  setDate('')
  setDesc('')
}
const handleDelete=(index)=>{
  const newReminder=[...reminder]
  newReminder.splice(index,1)
  setReminder(newReminder)
}

const handleEdit=(index)=>{
  setDate(reminder[index].date)
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
          <Form.Control type='date' class="form-control" value={date} onChange={(e)=>setDate(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Ingrese Descripción' value={desc} onChange={(e)=>setDesc(e.target.value)} />
        </Form.Group>

        <Form.Group>
        <Form.Check type="switch" id="custom-switch" label="Importante"/>
        </Form.Group>

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
               <Card.Text>Fecha:{reminder.date} </Card.Text>
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
