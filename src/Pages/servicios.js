import { Card, Tabs, Tab } from "react-bootstrap";


import COR from '../assets/img/mttocorr.png';
import PRE from '../assets/img/mttoprev.png';

import MTL from '../assets/img/mttolaser.jpg';
import MTT from '../assets/img/mttotinta.jpg';

import SER from '../assets/img/servidor.png';
import CAM from '../assets/img/camaras.png';
import RAC from '../assets/img/rack.jpg';



const App = () =>{
  return(
    <>
    
    <div style={{marginTop:'6rem'}}>
      <h2 className="text-center pt-5">Mantenimiento para tus equipos de cómputo.</h2>
      <div class="mt-5 d-flex justify-content-evenly mb-5">
        <Card  style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={PRE} />
          <Card.Body>
            <Card.Title>Preventivo</Card.Title>
            <Card.Text>
              Has notado que tu equipo se ha vuelto más lento o que se calienta más de lo normal, un mantenimiento a tiempo podría evitar daños a futuro en tu equipo.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={COR} />
          <Card.Body>
            <Card.Title>Correctivo</Card.Title>
            <Card.Text>
              Tu equipo dejó de encender o tiene algún fallo que no te permite seguir usando tu equipo correctamente, al realizar mantenimiento a tu equipo buscaremos y repararemos la avería.             
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    </div>


    <div>
      <h2 className="text-center pt-5">Mantenimiento para tus impresoras.</h2>
      <div class="mt-5 d-flex justify-content-evenly mb-5">
        <Card  style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={MTL} />
          <Card.Body>
            <Card.Title>Laser</Card.Title>
            <Card.Text>
              <ul className="mt-4">
                <li>Limpieza general.</li>
                <li>Revisión de engranaje.</li>
                <li>Cambios de toners.</li>
                <li>Limpieza de rodillos.</li>
              </ul>
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={MTT} />
          <Card.Body>
            <Card.Title>Tinta continua</Card.Title>
            <Card.Text>
              <ul className="mt-4">
                <li>Limpieza general.</li>
                <li>Retorno de tinta.</li>
                <li>Limpieza de cabezales.</li>
                <li>Limpieza de rodillos.</li>
                <li>Cambio de tinta</li>
              </ul>
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    </div>


    <div style={{background:'#45484a',color:'#f5f5f5'}}>
    <div id="s" className="px-4 pb-4" >
    <h2 className="text-center pt-5 mb-4">Servicios para tu negocio o empresa.</h2>
    
    <Tabs defaultActiveKey="Servidores" className="my-5" fill >
      <Tab eventKey="Servidores" title="Servidores">
        <img className="w-25 my-4" alt="Servidor" src={SER}></img>
        <p id="tab" className="px-4">Si lo que buscas es llevar a todas partes tu trabajo, una laptop es tu mejor opción tanto si lo requieres para videojuegos, para tus trabajos y estudios, incluso para diseño gráfico.</p>
      </Tab>

      <Tab eventKey="Camaras" title="Camaras">
        <img className="w-25" alt="Camaras" src={CAM}></img>
        <p id="tab" className="px-4">Un PC puede ocupar mucho espacio en su escritorio, por lo que si busca aprovechar el espacio un equipo Todo en uno puede ser su mejor opción, teniendo todo en pantalla y sin la necesidad de realizar conexiones.</p>
      </Tab>

      <Tab eventKey="Redes" title="Redes">
        <img className="w-25" alt="Rack" src={RAC}></img>
        <p id="tab" className="px-4">Necesitas un equipo potente que te permita realizar tareas como navegar, crear documentos o incluso editar videos o jugar sin ocupar demasiado espacio, el mini PC es la mejor opción.</p>
      </Tab>
    </Tabs>

    </div>
      
    </div>
    </>


  );
}
export default App;