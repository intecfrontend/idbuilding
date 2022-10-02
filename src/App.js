import './App.css';
import First from "./pages/first/first"
import Third from "./pages/third/third"
import Fourth from "./pages/fourth/fourth"

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// gsap.to("#sd", { scrollTrigger: { trigger: "#sd", toggleActions: "restart pause reverse pause" }, x: 400, duration: 5 })
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <First />
      <Third />
      <Fourth />

      </header>
    </div>
  );
}

export default App;
