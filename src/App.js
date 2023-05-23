import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/navbar";
import Index from "./Pages/firstpage";
import Servicios from "./Pages/servicios";
import Productos from "./Pages/productos";
import Soporte from "./Pages/soporte";
import Contacto from "./Pages/contacto";
import Aviso from "./Pages/aviso";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index/>}/>
            <Route path='servicios' element={<Servicios/>}/>
            <Route path='productos' element={<Productos/>}/>
            <Route path='soporte' element={<Soporte/>}/>
            <Route path='contacto' element={<Contacto/>}/>
            <Route path='Privacidad' element={<Aviso/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
