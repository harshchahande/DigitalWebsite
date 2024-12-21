import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./App.css";
import Footer from "./Component/Foote/Footer";

import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";
import Section2 from "./Component/Section2/Section2";
import Section3 from "./Component/Section3/Section3";
import Section4 from "./Component/Section4/Section4";
import Section5 from "./Component/Section5/Section5";
import Section6 from "./Component/Section6/Section6";
import Section7 from "./Component/Section7/Section7";




function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />

    

    </div>
  );
}

export default App;
