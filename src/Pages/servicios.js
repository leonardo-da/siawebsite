import { Card,Col,Row,Container} from "react-bootstrap";
import IMG0 from '../assets/img/preventivo.png';
import IMG1 from '../assets/img/correctivo.png';
import IMG2 from '../assets/img/servidor.png';
import IMG3 from '../assets/img/redes.png';

const App = () =>{
  const tables = [
    {nameI:`${IMG0}`,title:"Mantenimiento preventivo",contenent:"Notaste que tu equipo está más lento o que está más caliente de lo normal, un servicio preventivo podría solucionar el problema para evitar problemas futuros en tu equipo."},
    {nameI:`${IMG1}`,title:"Mantenimiento correctivo",contenent:"Tu equipo ha sufrido algún daño, o simplemente dejo de encender, al realizar un servicio correctivo podremos determinar la falla del equipo y la solución para revivir tu equipo y que funcione de forma correcta."},
    {nameI:`${IMG2}`,title:"Servidores",contenent:"Un servidor para tu empresa es más que necesario, adaptándolo a las necesidades de la empresa tanto para las tareas por realizar y la información que resguardar realizando las configuraciones adecuadas en el sistema operátivo y en la red."},
    {nameI:`${IMG3}`,title:"Redes",contenent:"hay babosa me asustas burra"}
  ]
    return(
      <Container>
        <div style={{marginTop:'9rem'}}>
          <h1 className="border-bottom">Nuestros Servicios</h1>
          <Row className=" row-cols-1 row-cols-md-2 g-4">
            {tables.map((table) => {
              return (
                <Col>
                  <Card className="p-4 m-4 align-items-center border-0">
                    <Card.Img variant="top" src={table.nameI} className="w-75"/>
                    <Card.Body>
                      <Card.Title>{table.title}</Card.Title>
                      <Card.Text>{table.contenent}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )})}
          </Row>
        </div>
      </Container>
    );
}
export default App;