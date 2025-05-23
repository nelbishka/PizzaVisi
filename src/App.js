import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
// import Work from './Components/Work';
import Testimonials from "./Components/Testimonials";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import {Helmet} from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Pizza Visi | Delicious Pizza in Berat</title>
        <meta
          name="description"
          content="Enjoy our pizza with fresh ingredients at Pizza Visi. Visit us!"
        />
        <meta
          name="keywords"
          content="pizza Berat, pizza Visi, Berat pizza delivery, best pizza Albania"
        />
        <meta name="author" content="Pizza Visi" />
        <link rel="canonical" href="https://pizzavisi.netlify.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Pizza Visi | Best Pizza in Berat"
        />
        <meta
          property="og:description"
          content="Taste the best pizza in Berat! Upgrade your experience."
        />
        <meta property="og:type" content="pizzeria" />
        <meta property="og:url" content="https://pizzavisi.netlify.app/" />
        <meta
          property="og:image"
          content="https://pizzavisi.netlify.app/images/Logo.png/"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pizza Visi" />
        <meta
          name="twitter:description"
          content="Try Berat's favorite pizzas today!"
        />
        <meta
          name="twitter:image"
          content="https://pizzavisi.netlify.app/images/Logo.png/"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="App">
        <Home />
        <About />
        {/* <Work /> */}
        <Testimonials />
        <Map />
        <Footer />
      </div>
    </>
  );
}

export default App;
