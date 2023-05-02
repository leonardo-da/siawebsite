import { Card, Tabs, Tab } from "react-bootstrap";


import COR from '../assets/img/mttocorr.png';
import PRE from '../assets/img/mttoprev.png';

import MTL from '../assets/img/mttolaser.jpg';
import MTT from '../assets/img/mttotinta.jpg';

import SER from '../assets/img/Servidor.png';
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
        <p id="tab" className="px-4">Instalación y configuración de servidores de las mejores marcas, adaptado a sus necesidades.<br/>

        Los mejores componentes para su servidor: RAM, procesador, almacenamiento, seguridad. <br/><br/>
        
        Diferentes tipos de configuraciones para su servidor: <br/><br/>
        <ul>
        <li>Sistema operativo.</li>
        <li>Permisos y alta de usuarios.</li>
        <li>Conexión remota a servidor.</li>
        <li>Comunicación con diferentes equipos y usuarios.</li>
        </ul><br/><br/>
        
        Servidor configurado y optimizado para distintos ámbitos de la empresa:<br/><br/>
        <ul>
          <li>Servidor de datos.</li>
          <li>Servidor para aplicaciones.</li>
          <li>Servidor de bases de datos.</li>
        </ul>
        </p>
      </Tab>

      <Tab eventKey="Camaras" title="Camaras">
        <img className="w-25" alt="Camaras" src={CAM}></img>
        <p id="tab" className="px-4">Si lo que buscas es seguridad, las cámaras de videovigilancia son una opción certera, contamos con todas las soluciones de seguridad en videovigilancia para tus necesidades: ya sea que necesites la instalación completa en tu empresa, negocio u hogar, mantenimiento a cámaras e instalación, errores en su sistema, etc.</p>
      </Tab>

      <Tab eventKey="Redes" title="Redes">
        <img className="w-25" alt="Rack" src={RAC}></img>
        <p id="tab" className="px-4 mt-5">Instalación de su red informática voz y datos, conexión de usuarios, dispositivos y clientes dentro de la red.<br/><br/>

        Routers, switches, servidores, access point de las mejores marcas para su empresa o negocio, adaptado a sus necesidades.<br/><br/>
        
        Conexión a red de todos sus equipos alámbrico o inalámbrico, impresoras, PC's, laptops, etc.<br/><br/>
        
        Soporte técnico dentro de su red:<br/>
        <ul>
          <li>Configuración de Equipos, software, redes.</li>
          <li>Mantenimiento de sistemas informáticos y redes.</li>
          <li>Configuración de cuentas para nuevos usuarios.</li>
          <li>Reparación o sustitución de equipos de computo.</li>
          <li>Aplicación y modernización de red y configuración de equipos nuevos.</li>
        </ul>
        </p>
      </Tab>
    </Tabs>

    </div>
      
    </div>
    </>


  );
}
export default App;