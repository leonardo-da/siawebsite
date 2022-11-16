import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/navbar";
import Index from "./Pages/firstpage";
import Servicios from "./Pages/servicios";
import Productos from "./Pages/productos";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index/>}/>
            <Route path='servicios' element={<Servicios/>}/>
            <Route path='productos' element={<Productos/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
