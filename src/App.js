import './App.css';
import React, { useEffect } from "react"
import First from "./pages/first/first"
import Third from "./pages/third/third"
import Fourth from "./pages/fourth/fourth"
import Fifth from "./pages/fifth/fifth"
import AOS from "aos";
import "aos/dist/aos.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// gsap.to("#sd", { scrollTrigger: { trigger: "#sd", toggleActions: "restart pause reverse pause" }, x: 400, duration: 5 })
function App() {
  useEffect(() => { AOS.init({ duration: 400 }) }, []);
  AOS.init();
  return (
    <div className="App">
      <header className="App-header">

        <div class="snapper" data-aos="fade-up" data-aos-delay="100"
          data-aos-easing="linear">
          <First />
        </div>
        <div class="snapper" data-aos="fade-up" data-aos-delay="100"
          data-aos-easing="linear">
          <Third />
        </div>
        <div class="snapper" data-aos="fade-up" data-aos-delay="100"
          data-aos-easing="linear">
          <Fourth />
        </div>


        <Fifth />

      </header>
    </div>
  );
}

export default App;
