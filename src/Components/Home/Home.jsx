import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Servprod from './serv-prod.jsx';
import IntroVideo from './IntroVideo.jsx';
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

