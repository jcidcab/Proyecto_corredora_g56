import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarHome from './components/NavbarHome';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioAcceso from './components/FormularioAcceso';
import IngresoPropiedad from './components/IngresoPropiedad';
import CardList from './components/CardList';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <NavbarHome />
      <FormularioRegistro/>
      <FormularioAcceso/>
      <IngresoPropiedad/>
      <CardList/>
      <Footer/>
    </>
  )
}

export default App

//texto agregado
