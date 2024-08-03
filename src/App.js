import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Servicesection/Services';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
