import { Card,Col,Row,Container} from "react-bootstrap";

import PC from '../assets/img/PC.png';

const App = () =>{

    return(
      <>
      <div style={{background:'#636363',marginTop:'6rem'}} className="text-white">
        <h2 className="text-center pt-3">Ensamblamos su PC de acuerdo a sus necesidades.</h2>
        <h3 className="text-center">Configurado a su estilo de trabajo</h3>
        <h4 className="text-center mt-5">*Los mejores componentes</h4>
        <img className="w-50 mx-auto d-block" src={PC}></img>


      </div>
      </>
 

    );
}
export default App;