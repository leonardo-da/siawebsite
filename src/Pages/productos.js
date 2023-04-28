import { Table, Tooltip, OverlayTrigger, Tab, Tabs, Card, ListGroup } from "react-bootstrap";

import PC from '../assets/img/pcgamer.png';
import PCD from '../assets/img/pcdiseno.png';
import PCN from '../assets/img/pcnegocio.png';
import LV from '../assets/img/videojuegos.png';
import AI from '../assets/img/Allinone.png';
import MP from '../assets/img/minipc.png';
import MB from '../assets/img/allalto.png';

import AMD from '../assets/img/amdlogo.png';
import INT from '../assets/img/Intellogo.png';
import AOR from '../assets/img/aoruslogo.png';
import COR from '../assets/img/corsairlogo.png';
import KIN from '../assets/img/kingstonlogo.png';
import NVI from '../assets/img/nvidialogo.png';

import HP from '../assets/img/hplogo.png';
import DE from '../assets/img/delllogo.png';
import LE from '../assets/img/lenovologo.png';
import AS from '../assets/img/asuslogo.png';
import MA from '../assets/img/macbooklogo.png';
import AC from '../assets/img/acerlogo.png';


import PRO from '../assets/img/procesador.png';
import FAN from '../assets/img/ventilador.png';
import RAM from '../assets/img/ram.png';
import GAB from '../assets/img/Gabinete.png';
import GRA from '../assets/img/grafica.png';
import POD from '../assets/img/poder.png';
import MAD from '../assets/img/madre.png';
import ALM from '../assets/img/SSD.png';
import PER from '../assets/img/perisfericos.png';

import TON from '../assets/img/toner.png';
import TIN from '../assets/img/tinta.png';

import COM from '../assets/img/componentes.png';
import MYT from '../assets/img/mouseytec.png';

import CAM from '../assets/img/camaras1.png';
import RED from '../assets/img/redes1.png';
import SER from '../assets/img/servidor.png';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const App = () =>{

    return(
      <>
      <div style={{background:'#45484a' ,marginTop:'6rem',color:'#f5f5f5'}}>
        <h2 className="text-center pt-5">Ensamblamos tu PC de acuerdo a tus necesidades.</h2>
        <h3 className="text-center">Configurado a tu estilo de trabajo</h3>

        <div class="mt-5 d-flex pb-5" style={{margin:"auto"}}>
        <Swiper   style={{margin:"auto"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-25 me-4"
      >
        <SwiperSlide style={{background:'#45484a'}}><img src={PC} alt="Gamer"></img>Videojuegos</SwiperSlide>
        <SwiperSlide style={{background:'#45484a'}}><img src={PCD} alt="Diseño"></img>Diseño</SwiperSlide>
        <SwiperSlide style={{background:'#45484a'}}><img src={PCN} alt="Negocio"></img>Negocio</SwiperSlide>
      </Swiper>
        <Table className="w-25 text-center text-white table table-borderless" style={{margin:"auto"}}>
          <tbody>
            <tr>
              <td>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Velocidad de trabajo</Tooltip>}>
                  <span className="d-inline-block">
                    <div>Procesador</div><img className="w-50" alt="Procesador" src={PRO}></img>
                  </span>
                </OverlayTrigger>
              </td>
              <td>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Múltiples aplicaciones abiertas</Tooltip>}>
                  <span className="d-inline-block">
                  <div>Memoria</div><img alt="RAM" className="w-50" src={RAM}></img>
                  </span>
                </OverlayTrigger>
              </td>
              <td>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Reducir temperatura</Tooltip>}>
                  <span className="d-inline-block">
                    <div>Disipación</div><img alt="Dicipacion" className="w-50" src={FAN}></img>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr> 
            <td>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Estética y protección</Tooltip>}>
                  <span className="d-inline-block">
                    <div>Gabinete</div><img alt="Gabinete" className="w-50" src={GAB}></img>
                  </span>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Visualización en alta calidad</Tooltip>}>
                  <span className="d-inline-block">
                    <div>Tarjeta Grafica</div><img alt="Grafica" className="w-50" src={GRA}></img>
                  </span>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Energía para cada componente</Tooltip>}>
                  <span className="d-inline-block">
                    <div>Fuente de poder</div><img alt="Fuente" className="w-50" src={POD}></img>
                  </span>
              </OverlayTrigger>
            </td>
            </tr>
            <tr>
            <td>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Comunicación de los componentes</Tooltip>}>
                  <span className="d-inline-block">
                    <div>Motherboard</div><img alt="Motherboard" className="w-50" src={MAD}></img>
                  </span>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Velocidad en su información</Tooltip>}>
                <span className="d-inline-block">
                  <div>Almacenamiento</div><img alt="Almacenamiento" className="w-50" src={ALM}></img>
                </span>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Controle su PC</Tooltip>}>
                <span className="d-inline-block">
                  <div>Perisfericos</div><img alt="Perisfericos" className="w-50" src={PER}></img>
                </span>
              </OverlayTrigger>
            </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-evenly pb-3">
        <img style={{width:"100px"}} className="mx-3" alt="Kingston" src={KIN}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Amd"  src={AMD}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Intel" src={INT}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Aorus" src={AOR}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Corsair" src={COR}></img>
        <img style={{width:"100px"}} className="mx-3" alt="nvidia" src={NVI}></img>
      </div>
      </div>


      <div id="r" className="px-4 mb-5">
        <h2 className="text-center pt-5 mb-4">Encuentra el equipo adecuado para ti.</h2>
        <Tabs defaultActiveKey="Laptop" className="mb-3" fill>

          <Tab eventKey="Laptop" title="Laptop">
            <img className="w-25" alt="Laptop" src={LV}></img>
            <p id="tab" className="px-4">Si lo que buscas es llevar a todas partes tu trabajo, una laptop es tu mejor opción tanto si lo requieres para videojuegos, para tus trabajos y estudios, incluso para diseño gráfico.</p>
          </Tab>

          <Tab eventKey="Allinone" title="Todo en uno">
            <img className="w-25" alt="Allinone" src={AI}></img>
            <p id="tab" className="px-4">Un PC puede ocupar mucho espacio en su escritorio, por lo que si busca aprovechar el espacio un equipo Todo en uno puede ser su mejor opción, teniendo todo en pantalla y sin la necesidad de realizar conexiones.</p>
          </Tab>

          <Tab eventKey="MiniPC" title="Mini PC">
            <img className="w-25" alt="Minipc" src={MP}></img>
            <p id="tab" className="px-4">Necesitas un equipo potente que te permita realizar tareas como navegar, crear documentos o incluso editar videos o jugar sin ocupar demasiado espacio, el mini PC es la mejor opción.</p>
          </Tab>

          <Tab eventKey="Macbook" title="Macbook">
            <img className="w-25" alt="Macbook" src={MB}></img>
            <p id="tab" className="px-4">La mayor seguridad en tu información y los mejores componentes al adquirir un equipo MacBook.<br/> MacBook Air, MacBook Pro, Mac mini, iMac.</p>
          </Tab>
        </Tabs>
      </div>
      <div>
      <div className="d-flex justify-content-evenly pb-3">
        <img style={{width:"100px"}} className="mx-3" alt="HP" src={HP}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Dell"  src={DE}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Lenovo" src={LE}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Asus" src={AS}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Acer" src={AC}></img>
        <img style={{width:"100px"}} className="mx-3" alt="Macbook" src={MA}></img>
      </div>
      </div>


      <div style={{background:'#45484a',color:'#f5f5f5'}} >
        <h2 className="text-center pt-5 mb-4">Componentes y periféricos para tus equipos.</h2>
        <div class="mt-3 d-flex justify-content-evenly p-5">
          <Card  style={{ width: '25rem',background:'#45484a' }} className="border-white">
            <Card.Img className="w-75 mx-auto" src={COM} />
            <Card.Body>
              <Card.Title>Componentes</Card.Title>
              <Card.Text>
                Actualiza tu equipo con los mejores componentes.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Tarjetas gráficas</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">SSD</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Fuente de alimentación</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Memoria RAM</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Y más</ListGroup.Item>
            </ListGroup>
        </Card>
        <Card  style={{ width: '25rem',background:'#45484a' }} className="border-white">
            <Card.Img className="w-75 mx-auto" src={MYT} />
            <Card.Body>
              <Card.Title>Periféricos</Card.Title>
              <Card.Text>
                Los mejores Periféricos para la comunicación con tu equipo.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Mouse y teclados</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Adaptadores</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Almacenamiento</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Camaras</ListGroup.Item>
              <ListGroup.Item style={{background:'#45484a'}} className="text-white">Y más</ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
      </div>


      <div>
        <h2 className="text-center pt-5">Consumibles para tus impresoras.</h2>

        <div class="mt-3 d-flex justify-content-evenly mb-5">
          <Card  style={{ width: '25rem' }}>
            <Card.Img className="w-75 mx-auto" src={TON} />
            <Card.Body>
              <Card.Title>Toner</Card.Title>
              <Card.Text>
                Venta del los toner mas usados para las marcas HP, BROTHER, XEROX y mas.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Laser</ListGroup.Item>
            </ListGroup>
        </Card>
        <Card style={{ width: '25rem' }}>
            <Card.Img className="w-75 mx-auto" src={TIN} />
            <Card.Body>
              <Card.Title>Tintas</Card.Title>
              <Card.Text>
                Tintas originales compatibles con tu impresora de las marcas EPSON, HP, BROTHER.              
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Tinta Continua</ListGroup.Item>
            </ListGroup>
        </Card>
        </div>

      <div style={{background:'#45484a',color:'#f5f5f5'}}>
      <div className="text-white">
        <h1 className="text-center pt-5">Servidores</h1>
        <div class="mt-5 d-flex pb-5" style={{margin:"auto"}}>
          <div style={{margin:"auto"}} className="w-25">
            <img src={SER} alt="servidor" className="w-100"></img>
          </div>
          <div className="w-50 text-white" style={{margin:"auto"}}>
            <p>Necesitas un servidor que te permita ya sea almacenar datos, guardar la base de datos de tu sistema o incluso para tener programas que pueda usar cada uno de los trabajadores en tu negocio o empresa, te ayudamos con los mejores componentes y la configuración adecuada para tu ámbito. 
            <ul className="mt-4">
                <li>Permisos.</li>
                <li>Alta de usuarios.</li>
                <li>Carpetas compartidas.</li>
                <li>Acceso remoto.</li>
                <li>y más configuraciones para tu servidor</li>
              </ul>
            </p>
            </div>
          </div>
          </div>

        <div class="py-3 d-flex justify-content-evenly">
          <Card  style={{ width: '25rem',background:'#45484a' }} className="border-0">
            <Card.Body>
              <h2>Cámaras de videovigilancia</h2>
              <Card.Text className="mt-4">
              <p>Instala tu sistema de vigilancia en el lugar que necesites, las mejores marcas y los diferentes componentes necesarios para tener tu instalación completa.<br/><br/>
              <ul>
                <li>DVR´s.</li>
                <li>Cámaras WIFI.</li>
                <li>Cámaras IP.</li>
                <li>Discos duros especiales.</li>
                <li>Cableado.</li>
              </ul>
              </p>
              </Card.Text>
            </Card.Body>
            <Card.Img className="w-75 mx-auto" src={CAM} />
        </Card>
        <Card style={{ width: '25rem',background:'#45484a' }} className="border-0">
            <Card.Body>
              <h2>Redes alámbricas e inalámbricas</h2>
              <Card.Text className="mt-4">
                <p>Todo lo necesario para tu red, los mejores componentes para lograr que su sistema sea rápido, eficiente y que esté disponible en todo momento. <br/><br/>
              <ul>
                <li>Access point.</li>
                <li>Switch.</li>
                <li>Adaptadores de red.</li>
                <li>Routers.</li>
                <li>Hubs.</li>
              </ul>
              </p>
              </Card.Text>
            </Card.Body>
            <Card.Img className="w-75 mx-auto" src={RED} />
        </Card>
        </div>
      </div>
      </div>
      </>
 

    );
}
export default App;