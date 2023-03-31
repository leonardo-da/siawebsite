import { Table} from "react-bootstrap";

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

        <div class="mt-5 d-flex">
        <img className="w-50 mx-5" src={PC}></img>
        <Table className="w-50 mx-5 text-center text-white" bordered>
          <tbody>
            <tr>
              <td><div>Procesador</div><img className="w-50" src={PRO}></img></td>
              <td><div>Memoria</div><img className="w-50" src={RAM}></img></td>
              <td><div>Disipación</div><img className="w-50" src={FAN}></img></td>
            </tr>
            <tr> 
            <td><div>Gabinete</div><img className="w-50" src={GAB}></img></td>
            <td><div>Tarjeta Grafica</div><img className="w-50" src={GRA}></img></td>
            <td><div>Fuente de poder</div><img className="w-50" src={POD}></img></td>
            </tr>
            <tr>
            <td><div>Procesador</div><img className="w-50" src={MAD}></img></td>
            <td><div>Almacenamiento</div><img className="w-50" src={ALM}></img></td>
            <td><div>Perisfericos</div><img className="w-50" src={PER}></img></td>
            </tr>
          </tbody>
        </Table>

      </div>
      </div>
      
      </>
 

    );
}
export default App;