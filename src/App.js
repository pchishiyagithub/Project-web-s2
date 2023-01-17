// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { Service } from './components/Service/Service';
import { New_Arrival } from './components/New Arrival/New_Arrival';
import { Collection } from './components/Collection/Collection';
import { Promotion } from './components/Promotion/Promotion';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Instagram } from './components/Instagram/Instagram';
import { Footer } from './components/Footer/Footer';
import Homepage from './components/home';

function App() {
  return (
    <>
      <div>
        <Header />
        <Homepage/>
        {/* <Slider />
        <New_Arrival />
        <Collection /> */}
        {/* <Promotion /> */}
        {/* <Testimonial />    
        <Instagram /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
