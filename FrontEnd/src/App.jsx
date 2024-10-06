import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarHome from './components/NavbarHome';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioAcceso from './components/FormularioAcceso';
import IngresoPropiedad from './components/IngresoPropiedad';
import DetallePublicacion from './components/DetallePublicacion';

function App() {


  return (
    <>
      <NavbarHome />
      <DetallePublicacion/>
      <FormularioRegistro/>
      <FormularioAcceso/>
      <IngresoPropiedad/>
    </>
  )
}

export default App
