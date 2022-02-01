import './App.css';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SimpleFSImage from './components/SimpleFSImage/SimpleFSImage';
import SimpleText from './components/SimpleText/SimpleText';

import brandingImage from './media/images/branding-example.jpg'

function App() {
  return (
    <>
    <HeroSection/>
    <SimpleText textoLineOne = "SOMOS EL CAMINO PERFECTO" textoLineTwo = "PARA MATERIALIZAR TUS IDEAS"/>
    <SimpleFSImage source = {brandingImage} alt = 'Branding Image'/>
    </>
  );
}

export default App;
