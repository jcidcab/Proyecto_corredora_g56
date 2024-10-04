import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioAcceso from './components/FormularioAcceso';
import IngresoPropiedad from './components/IngresoPropiedad';

function App() {


  return (
    <>
      <NavBar />
      <FormularioRegistro/>
      <FormularioAcceso/>
      <IngresoPropiedad/>
    </>
  )
}

export default App
