import "./App.css";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Intro from "./Intro.js";
import Images from "./Images.js";
import Video from "./Video.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <Images />
      <Video />
      <Footer />
    </div>
  );
}
