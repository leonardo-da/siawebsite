import { Card,Col,Row,Button, Container} from "react-bootstrap";
import IMG0 from '../assets/img/almacenamiento.png';
import IMG1 from '../assets/img/almacenamiento.png';
import IMG2 from '../assets/img/almacenamiento.png';
import IMG3 from '../assets/img/almacenamiento.png';
import IMG4 from '../assets/img/almacenamiento.png';

const App = () =>{
  const tables = [
    {nameI:`${IMG0}`,title:"Mantenimiento preventivo",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG1}`,title:"Mantenimiento correctivo",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG2}`,title:"Servidores",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG3}`,title:"Redes",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG4}`,title:"Estufas, Lavadoras y mas",contenent:"hay babosa me asustas burra"},
  ]
    return(
      <Container>
      <Row className=" row-cols-1 row-cols-md-2 g-4" style={{marginTop:'7rem'}}>
        {tables.map((table) => {
          return (
            <Col>
              <Card className="p-4 m-3 align-items-center">
                <Card.Img variant="top" src={table.nameI} className="w-75"/>
                <Card.Body>
                  <Card.Title>{table.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          )})}
      </Row>
    </Container>
    );
}
export default App;