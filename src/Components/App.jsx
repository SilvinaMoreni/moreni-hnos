import Navbar from './Navbar';
import Footer from './Footer';
import Servprod from './serv-prod';
import IntroVideo from './IntroVideo';
import Nosotros from './Nosotros.jsx';  
import Certificaciones from './Certificaciones.jsx';

function App() {
  return ( 
    <div className="App">

      
      <Navbar/>
      <IntroVideo/>
      <Nosotros/>
      <Servprod/>
      <Certificaciones/>
      <Footer/>
    </div>
    );
}

export default App;

