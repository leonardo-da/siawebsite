import '../App.css'
import { Card,Button,Container} from "react-bootstrap";
import fpt from "../assets/img/fpt.png";
import IMG0 from '../assets/img/pago.png';
import IMG1 from '../assets/img/pago.png';
import IMG2 from '../assets/img/pago.png';

const App = () => {
  return (
    <>
    <div style={{ marginTop:'6.4rem' }} className="mb-4">
      <div className="position-relative mb-5">
        <img src={fpt} alt="info" className="w-100"/>
        <div id='titlebox' className="position-absolute text-center text-white" style={{top:'20%',left:'15%'}}>We help make your life easier</div>
        <div id='textbox' className="position-absolute text-center text-white" style={{top:'35%',left:'15%', fontWeight:'bold'}}>La mejor calidad</div>
        <div id='textbox' className="position-absolute text-center text-white" style={{top:'50%',left:'15%',fontWeight:'bold'}}>en tus productos y servicios</div>
      </div>

      <div>
        <h4 className="text-center m-2">Los productos y servicios de la mejor calidad para tus equipos e Impresoras.</h4>
      <div>
      <Container>
      <div className='mt-5 d-flex justify-content-evenly text-center'>
        <Card style={{ width: '18rem' }} className="border-0">
          <Card.Img className="w-50 mx-auto mt-3" variant="top" src={IMG0} />
            <Card.Body>
              <Card.Title id='tc'>Opciones de pago</Card.Title>
              <Card.Text id='txc' className="mb-4">
                Soporte en remoto de ordenadores y otros dispositivos finales.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="border-0">
          <Card.Img className="w-50 mx-auto mt-3" variant="top" src={IMG1} />
            <Card.Body>
              <Card.Title id='tc'>Opciones de pago</Card.Title>
              <Card.Text id='txc' className="mb-4">
                Soporte en remoto de ordenadores y otros dispositivos finales.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="border-0">
          <Card.Img className="w-50 mx-auto mt-3" variant="top" src={IMG2} />
            <Card.Body>
              <Card.Title id='tc'>Opciones de pago</Card.Title>
              <Card.Text id='txc' className="mb-4">
                Contamos con terminal, al igual que transferencia para su comodidad.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div className='d-flex justify-content-evenly'>
        <Button className='w-50'>Nuestro aviso de privacidad</Button>
      </div>
      </Container>

        </div>
      </div>
      </div>
      </>
  );
}

export default App;
