import './App.css';
import Home from './Components/Home';
import About from './Components/About'
// import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Map from './Components/Map';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
      <Home />
      <About />
      {/* <Work /> */}
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
