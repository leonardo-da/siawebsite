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
    {nameI:`${IMG7}`,title:"Alto desempeño",contenent:"El mejor desempeño en un espacio reducido y para ejecutar todas las tareas posibles y al mismo tiempo mejorando el tiempo de la realización de tus tareas."}
  ]

  const accesorios = [
    {nameI:`${IMG8}`,title:"Almacenamiento",contenent:"Si lo que buscas es donde tener un respaldo de tu información y/o aumentar las capacidades de tu equipo, agregar componentes de nueva generación es ideal para mejorar la velocidad y el almacenamiento."},
    {nameI:`${IMG9}`,title:"Teclados y mouses",contenent:"Los Periféricos indispensables para tu PC y all in one o incluso para tu portátil, ya sea que los necesitas de forma alámbrica o inalámbrica."},
    {nameI:`${IMG10}`,title:"Eliminadores",contenent:"El cargador para el modelo de tu equipo Windows o Mac, cuál sea que necesites tanto original como compatible y del voltaje y amperaje correcto para que tu equipo funcione correctamente."},
    {nameI:`${IMG11}`,title:"Componentes",contenent:"Necesitas actualizar tu equipo o deseas armar una PC por tu cuenta, la mejor opción es conseguir los componentes de mejor calidad y más actualizados para que tu equipo funcione correctamente por mucho tiempo."},
    {nameI:`${IMG12}`,title:"Toners",contenent:"Tienes una impresora que utilice tóner, cualquier modelo de tóner que necesites para tus impresoras originales o compatibles de la mejor calidad."},
    {nameI:`${IMG13}`,title:"Tintas",contenent:"Tienes una impresora que utilice tintas, cual sea el modelo de tinta que use tu impresora y el color que necesites, al igual que la marca."}
  ]

  const software = [
    {nameI:`${IMG14}`,title:"Antivirus",contenent:"A medida que las tecnologías avanzan nuevos riesgos de delitos informáticos aparecen, así que un software que es diseñado para detectar, evitar y eliminar malware te será de mucha ayuda para la integridad de tu información."},
    {nameI:`${IMG15}`,title:"Office",contenent:"La instalación del software más conocido y utilizado en el ámbito de la educación, el trabajo e incluso para el uso personal. Sus herramientas te ayudarán a realizar tus tareas más fáciles y rápidas."},
    {nameI:`${IMG16}`,title:"Diseño",contenent:"Los mejores software de diseño para tu equipo, ya sea que lo necesites para la universidad o para tu empresa o quizá para tu uso personal, los mejores software para cualquier ámbito de diseño."}
  ]

    return(
      <Container>
        <div style={{marginTop:'9rem'}}>
        <h1 className="text-center mb-5">Nuestros productos</h1>
          <h2 className="border-bottom">Portátiles</h2>
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
          <h2 className="border-bottom">PC's</h2>
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
          <h2 className="border-bottom">All in one</h2>
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
          <h2 className="border-bottom">Periféricos y consumibles</h2>
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
          <h2 className="border-bottom">Software</h2>
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