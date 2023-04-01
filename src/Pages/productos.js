import { Table, Tooltip, OverlayTrigger} from "react-bootstrap";

import PC from '../assets/img/PC.png';
import PRO from '../assets/img/procesador.png';
import FAN from '../assets/img/ventilador.png';
import RAM from '../assets/img/ram.png';
import GAB from '../assets/img/Gabinete.png';
import GRA from '../assets/img/grafica.png';
import POD from '../assets/img/poder.png';
import MAD from '../assets/img/madre.png';
import ALM from '../assets/img/SSD.png';
import PER from '../assets/img/perisfericos.png';


const App = () =>{

    return(
      <>
      <div style={{background:'#636363',marginTop:'6rem'}} className="text-white">
        <h2 className="text-center pt-5">Ensamblamos su PC de acuerdo a sus necesidades.</h2>
        <h3 className="text-center">Configurado a su estilo de trabajo</h3>

        <div class="mt-5 d-flex pb-5" style={{margin:"auto"}}>
        <img className="w-25 me-4" alt="PC" style={{margin:"auto"}} src={PC}></img>
        <Table className="w-25 text-center text-white" style={{margin:"auto"}} bordered>
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
      
      </>
 

    );
}
export default App;