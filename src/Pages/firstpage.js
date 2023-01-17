import '../App.css'
import fpt from "../assets/img/fpt.png";

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
        <h3 className="text-center m-2 fs-4 font-weight-bold">Los productos y servicios de la mejor calidad para tus equipos e Impresoras.</h3>
      </div>
      </div>
      </>
  );
}

export default App;
