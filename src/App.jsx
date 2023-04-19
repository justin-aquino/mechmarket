import Navibar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navibar />
      <main>
        <h1>Mech Market by Juno</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
