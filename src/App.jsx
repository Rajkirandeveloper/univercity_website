import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Title from "./components/Title/Text";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";
const App = () => {
  const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="what we offer" subtitle="Our Program" />
        <Programs />
        <About  setPlayState={setPlayState} />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus />
        <Title title="What Student Says" subtitle="TESTIMONIALS" />
        <Testimonials />
        <Title title="Get In Touch" subtitle="Contact Us" />
        <Contact />
        <Footer/>
      </div>
      <VideoPlayer setPlayState={setPlayState} playState={playState}/>
    </div>
  );
};

export default App;
