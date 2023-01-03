import { Card,Col,Row,Container} from "react-bootstrap";

import IMG0 from '../assets/img/disenop.png';
import IMG1 from '../assets/img/videojuegos.png';
import IMG2 from '../assets/img/pcdiseno.png';
import IMG3 from '../assets/img/pcgamer.png';
import IMG4 from '../assets/img/server.png';
import IMG5 from '../assets/img/alto.png';
import IMG6 from '../assets/img/alldiseno.png';
import IMG7 from '../assets/img/allalto.png';
import IMG8 from '../assets/img/almacenamiento.png';
import IMG9 from '../assets/img/mouseytec.png';
import IMG10 from '../assets/img/eliminadores.png';
import IMG11 from '../assets/img/componentes.png';
import IMG12 from '../assets/img/toner.png';
import IMG13 from '../assets/img/tinta.png';
import IMG14 from '../assets/img/kaspersky.png';
import IMG15 from '../assets/img/office.png';
import IMG16 from '../assets/img/diseno.png';

const App = () =>{

  const portatiles = [
    {nameI:`${IMG0}`,title:"Diseño",contenent:"Toda portátil que sea utilizada para este fin, debe ser lo suficientemente potente para usar programas de diseño. También, deberá realizar sus funciones de manera rápida y fluida. "},
    {nameI:`${IMG1}`,title:"Videojuegos",contenent:"Si quieres jugar en PC estés donde estés, el portátil gaming es tu dispositivo. Los juegos son una de las aplicaciones más exigentes que existen y requiere los mejores componentes."}
  ]

  const PC = [
    {nameI:`${IMG2}`,title:"Diseño",contenent:"Si lo que buscas es un PC para diseñar ya sea a nivel aficionado o profesional, este tipo de equipo puede brindarte todo lo que necesitas en la mejor calidad y rapidez posible."},
    {nameI:`${IMG3}`,title:"Videojuegos",contenent:"Los ordenadores gaming de sobremesa son una gran opción para los amantes de los videojuegos, ya que ofrecen numerosas ventajas y prestaciones en este ámbito"},
    {nameI:`${IMG4}`,title:"Negocios",contenent:"¿Eres dueñ@ de un negocio o una empresa? Entonces necesitaras optimizar todas tus tareas con la ayuda de una computadora de alto rendimiento para completar todas las actividades."},
    {nameI:`${IMG5}`,title:"Alto desempeño",contenent:"Ya sea para jugar o para conseguir tener una mejor experiencia en programas avanzados, siempre se está buscando el máximo rendimiento posible así que una PC de alto rendimiento hará posible esto."}
  ]

  const allinone = [
    {nameI:`${IMG6}`,title:"Diseño",contenent:"Si trabajas en un lugar pequeño, el espacio en su escritorio puede ser muy limitado y una PC puede ocupar demasiado espacio. Entonces una all in one será tu mejor opción."},
    {nameI:`${IMG7}`,title:"Alto desempeño",contenent:"hay babosa me asustas burra"}
  ]

  const accesorios = [
    {nameI:`${IMG8}`,title:"Almacenamiento",contenent:"Si lo que buscas es donde tener un respaldo de tu información y/o aumentar las capacidades de tu equipo, agregar componentes de nueva generación es ideal para mejorar la velocidad y el almacenamiento."},
    {nameI:`${IMG9}`,title:"Teclados y mouses",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG10}`,title:"Eliminadores",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG11}`,title:"Componentes",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG12}`,title:"Toners",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG13}`,title:"Tintas",contenent:"hay babosa me asustas burra"},
  ]

  const software = [
    {nameI:`${IMG14}`,title:"Antivirus",contenent:"A medida que las tecnologías avanzan nuevos riesgos de delitos informáticos aparecen, así que un software que es diseñado para detectar, evitar y eliminar malware te será de mucha ayuda para la integridad de tu información."},
    {nameI:`${IMG15}`,title:"Office",contenent:"hay babosa me asustas burra"},
    {nameI:`${IMG16}`,title:"Diseño",contenent:"hay babosa me asustas burra"}
  ]

    return(
      <Container>
        <div style={{marginTop:'9rem'}}>
          <h1 className="border-bottom">Portátiles</h1>
          <Row className=" row-cols-1 row-cols-md-2 g-4">
            {portatiles.map((table) => {
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

        <div className="mt-5">
          <h1 className="border-bottom">PC's</h1>
          <Row className=" row-cols-1 row-cols-md-2 g-4">
            {PC.map((table) => {
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

        <div className="mt-5">
          <h1 className="border-bottom">All in one</h1>
          <Row className=" row-cols-1 row-cols-md-2 g-4">
            {allinone.map((table) => {
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

        <div className="mt-5">
          <h1 className="border-bottom">Periféricos y consumibles</h1>
          <Row className=" row-cols-1 row-cols-md-2 g-4">
            {accesorios.map((table) => {
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

        <div className="mt-5">
          <h1 className="border-bottom">Software</h1>
          <Row className=" row-cols-1 row-cols-md-2 g-4">
            {software.map((table) => {
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