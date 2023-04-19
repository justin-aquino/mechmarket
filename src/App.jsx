import Navibar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Navibar />
      <main>
        <Container>
          <h1>Mech Market by Juno</h1>
        </Container>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
