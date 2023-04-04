import { Table, Tooltip, OverlayTrigger, Tab, Tabs} from "react-bootstrap";

import PC from '../assets/img/pcgamer.png';
import PCD from '../assets/img/pcdiseno.png';
import PCN from '../assets/img/pcnegocio.png';
import LV from '../assets/img/videojuegos.png';
import AI from '../assets/img/Allinone.png';
import MP from '../assets/img/minipc.png';
import MB from '../assets/img/allalto.png';

import PRO from '../assets/img/procesador.png';
import FAN from '../assets/img/ventilador.png';
import RAM from '../assets/img/ram.png';
import GAB from '../assets/img/Gabinete.png';
import GRA from '../assets/img/grafica.png';
import POD from '../assets/img/poder.png';
import MAD from '../assets/img/madre.png';
import ALM from '../assets/img/SSD.png';
import PER from '../assets/img/perisfericos.png';

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
      <div style={{background:'#636363',marginTop:'6rem'}} className="text-white">
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
        <SwiperSlide style={{background:'#636363'}}><img src={PC} alt="Gamer"></img>Videojuegos</SwiperSlide>
        <SwiperSlide style={{background:'#636363'}}><img src={PCD} alt="Diseño"></img>Diseño</SwiperSlide>
        <SwiperSlide style={{background:'#636363'}}><img src={PCN} alt="Negocio"></img>Negocio</SwiperSlide>
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
      </div>

      <div className="px-4">
        <h2 className="text-center pt-5 mb-4">Encuentra el equipo adecuado para ti.</h2>
        <Tabs defaultActiveKey="Laptop" className="mb-3" fill>

          <Tab eventKey="Laptop" title="Laptop">
            <img className="w-25" alt="Laptop" src={LV}></img>
            <p id="tab" className="px-4">Si lo que busca es llevar a todas partes su trabajo, una laptop es su mejor opción tanto si lo requiere para videojuegos, para sus trabajos y estudios, incluso para diseño gráfico.</p>
          </Tab>

          <Tab eventKey="Allinone" title="Todo en uno">
            <img className="w-25" alt="Allinone" src={AI}></img>
            <p id="tab" className="px-4">Un PC puede ocupar mucho espacio en su escritorio, por lo que si busca aprovechar el espacio un equipo Todo en uno puede ser su mejor opción, teniendo todo en pantalla y sin la necesidad de realizar conexiones.</p>
          </Tab>

          <Tab eventKey="MiniPC" title="Mini PC">
            <img className="w-25" alt="Minipc" src={MP}></img>
            <p id="tab" className="px-4">Si lo que busca es llevar a todas partes su trabajo, una laptop es su mejor opción tanto si lo requiere para videojuegos, para sus trabajos y estudios, incluso para diseño gráfico.</p>
          </Tab>

          <Tab eventKey="Macbook" title="Macbook">
            <img className="w-25" alt="Macbook" src={MB}></img>
            <p id="tab" className="px-4">Si lo que busca es llevar a todas partes su trabajo, una laptop es su mejor opción tanto si lo requiere para videojuegos, para sus trabajos y estudios, incluso para diseño gráfico.</p>
          </Tab>

        </Tabs>
      </div>

      <div>
      
      </div>
      
      </>
 

    );
}
export default App;